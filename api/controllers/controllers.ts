import db from '../models';
import { users } from '../seeders/users';
import { projects } from '../seeders/projects';
import { UserAttributes } from '../models/users';
import { Project } from '../models/projects';
import { technologies } from '../seeders/technologies';
import { Technology } from '../models/technologies';

// USERS CONTROLLERS --------------------------------------------------------------------------------------

export const getUsers = async () : Promise<UserAttributes[]> => {
    const allUsers : UserAttributes[] = await db.Users.findAll({include: db.Technologies});

    if(!allUsers.length){
         const dbtest : UserAttributes[] = await db.Users.bulkCreate(users)
         return dbtest
    } 
    else {
        return allUsers;
    }
};

export const getByName = async (name : string) : Promise<UserAttributes> => {
    const user : UserAttributes = await db.Users.findOne({where: {name:name}}, {include: db.Technologies});
    return user;
};

export const getById = async (id : string) : Promise<UserAttributes> => {
    const user : UserAttributes = await db.Users.findByPk(id, {include: db.Technologies});
    return user;
};

export const addTechnologies = async (id : string, technologies : Technology[]) : Promise<UserAttributes> => {
    const user : UserAttributes = await db.Users.findByPk(id , {include: db.Technologies});
    await user?.addTechnologies(technologies)
    return user;
};

export const createUser = async (name : string, email : string, company : string, technologies : Technology[] ) : Promise<void> => {
    const newUser : UserAttributes = await db.Users.create({name, email, company})
    await newUser?.addTechnologies(technologies)
}

// PROJECTS CONTROLLERS --------------------------------------------------------------------------------

export const getProjects  = async () : Promise<Project[]> => {
    const allProjects : Project[] = await db.Projects.findAll({include :[ db.Technologies, db.Users]})

    if(!allProjects.length){
        const dbtest : Project[] = await db.Projects.bulkCreate(projects)
        return dbtest;
    }
    else {
        return allProjects;
    }
};

export const getProjectId = async (id : string) : Promise<Project> => {
    const project : Project = await db.Projects.findByPk(id, {include : [db.Technologies, db.Users]})
    return project;
};

export const createProject = async (title : string, description : string, status : string, technologies : Technology[]) : Promise<Project> => {
    const newProject : Project = await db.Projects.create({title, description, status})
    await newProject?.addTechnologies(technologies)
    return newProject;
};

export const recuitUser = async (id : string, user : UserAttributes) : Promise<Project> => {
    const currentProject : Project = await db.Projects.findByPk(id, {include : [db.Technologies, db.Users]})
    await currentProject?.addUser(user)
    return currentProject
}

export const updateUsers = async (id : string, user : UserAttributes) : Promise<Project> => {
    const currentProject : Project = await db.Projects.findByPk(id, {include : [db.Technologies, db.Users]})
    await currentProject?.setUsers(user)
    return currentProject
};

export const updateTechnologies = async (id : string, technology : Technology) : Promise<Project> => {
    const currentProject : Project = await db.Projects.findByPk(id, {include : [db.Technologies, db.Users]})
    await currentProject?.setTechnologies(technology)
    return currentProject
};


// TECHNOLOGIES CONTROLLERS -----------------------------------------------------------------------------

export const getTechnologies = async () : Promise<Technology[]> => {
    const allTechnologies : Technology[] = await db.Technologies.findAll()

    if(!allTechnologies.length){
        const dbtest : Technology[] = await db.Technologies.bulkCreate(technologies)
        return dbtest;
    }
    else {
        return allTechnologies;
    }
}

