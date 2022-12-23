import { Router } from 'express';
import { getUsers } from '../controllers/controllers';

const router : Router = Router();

router.get('/', async (_req, res) => {
    try {
        const users = await getUsers();
        res.status(200).send(users)
    } catch(err) {
        console.log(err)
    }
})

export default router;