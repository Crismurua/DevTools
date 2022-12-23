import { Router } from 'express';
import { getProjects } from '../controllers/controllers';

const router : Router = Router();

router.get('/', async (_req, res) => {
    try {
        const projects = await getProjects();
        res.status(200).send(projects);
    } catch(err) {
        console.log(err);
    }
})

export default router;