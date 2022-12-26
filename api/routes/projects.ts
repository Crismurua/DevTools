import { Router } from 'express';
import { createProject, getProjectId, getProjects, recruitUser, updateTechnologies, updateUsers } from '../controllers/controllers';
import { Project } from '../models/projects';
import db from '../models';
import { parse } from 'path';

const router : Router = Router();

router.get('/', async (_req, res) => {
    try {
        const projects = await getProjects();
        res.status(200).send(projects);
    } catch(err) {
        console.log(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const project = await getProjectId(id);
        res.status(200).send(project);
    } catch(err) {
        console.log(err);
    }
})

router.post('/', async (req, res) => {
    try {
        const { title, description, status, technologies } = req.body;
        const newProject : Project = await createProject(title, description, status, technologies)
        res.status(200).send(newProject)
    } catch(err) {
        console.log(err)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { user } = req.body
        const recruited : Project = await recruitUser(id, user) 
        res.status(201).send(recruited)
    } catch(err) {
        console.log(err)
    }
})

router.put('/update/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { user, technologies } = req.body
        if(user)  {const recruited : Project = await updateUsers(id, user)}
        if(technologies) {const updated : Project = await updateTechnologies(id, technologies)}
        res.status(201).send('Project successfully updated')
    } catch(err) {
        console.log(err)
    }
});

router.delete('/:id', async (req, res) => {
    try{
        const {id} = req.params;
        await db.Projects.destroy({where: {id}})
        res.status(200).send(`Project id ${id} successfully destroyed!`)
    }
    catch(err) {
        res.status(400).send('Something went wrong!')
    }
})


export default router;