import { Router } from 'express';

const router : Router = Router();

router.get('/', (_req, res) => {
    try {
        res.send('working OK!')
    } catch(err) {
        console.log(err)
    }
})

export default router;