import { Router } from 'express';
import  users  from './users';
import projects from './projects';
import technologies from './technologies';


const router: Router = Router();

router.use('/users', users);
router.use('/projects', projects);
router.use('/technologies', technologies);


export default router;