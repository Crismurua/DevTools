import { Router } from 'express';
import { getTechnologies } from '../controllers/controllers';

const router : Router = Router();

router.get('/', async (_req, res) => {
    try {
        const technologies = await getTechnologies();
        res.status(200).send(technologies)
    } catch(err) {
        console.log(err)
    }
})

export default router;