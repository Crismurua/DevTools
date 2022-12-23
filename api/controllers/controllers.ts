import db from '../models';
import { users } from '../seeders/users';
import { projects } from '../seeders/projects';

export const createUsers = () => {
    users.map(u => {
        db.Users.create(u)
    })
};

export const createProjects = () => {
    projects.map(p => {
        db.Projects.create(p)
    })
};

createProjects();

createUsers();