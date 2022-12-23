import db from '../models';
import { users } from '../seeders/users';
import { projects } from '../seeders/projects';
import { UserAttributes } from '../models/users';
import { Project } from '../models/projects';
import { technologies } from '../seeders/technologies';
import { Technology } from '../models/technologies';

export const getUsers = async () => {
    const allUsers : UserAttributes[] = await db.Users.findAll();

    if(!allUsers.length){
         const dbtest : UserAttributes[] = await db.Users.bulkCreate(users)
         return dbtest
    } 
    else {
        return allUsers;
    }
};

export const getProjects  = async () => {
    const allProjects : Project[] = await db.Projects.findAll()

    if(!allProjects.length){
        const dbtest : Project[] = await db.Projects.bulkCreate(projects)
        return dbtest;
    }
    else {
        return allProjects;
    }
};

export const getTechnologies = async () => {
    const allTechnologies : Technology[] = await db.Technologies.findAll()

    if(!allTechnologies.length){
        const dbtest : Technology[] = await db.Technologies.bulkCreate(technologies)
        return dbtest;
    }
    else {
        return allTechnologies;
    }
}

