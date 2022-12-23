import { Router } from 'express';
import { createProject, getProjectId, getProjects, recuitUser } from '../controllers/controllers';
import { Project } from '../models/projects';

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
        const project = await getProjectId(parseInt(id));
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
        const recruited : Project = await recuitUser(parseInt(id), user) 
        res.status(201).send(recruited)
    } catch(err) {
        console.log(err)
    }
})



export default router;