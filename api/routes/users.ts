import { Router } from 'express';
import { getUsers, getByName, getById, addTechnologies, createUser } from '../controllers/controllers';
import db from '../models';


const router : Router = Router();

router.get('/', async (req, res) => {
    try {
        const { name }  = req.query;
        if(name) {
            const user = await getByName(name.toString())
            res.status(200).send(user)
        }
        else {
            const users = await getUsers();
            res.status(200).send(users)
        }
    } catch(err) {
        console.log(err)
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await getById(id);
        res.status(200).send(user);
    } catch(err) {
        console.log(err)
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { technologies } = req.body;
        await addTechnologies(id , technologies)
        res.status(201).send('Update Successfull')
    } catch(err) {
        console.log(err)
    }
});

router.post('/', async (req, res) => {
    try {
        const {name, email, company, technologies} = req.body;
        if(name && email && company && technologies){
            const newUser = await createUser(name, email, company, technologies)
            res.status(201).send('User successfully created!')
        }
    }
    catch(err) {
        console.log(err)
    }
});

router.delete('/:id', async (req, res) => {
    try{
        const {id} = req.params;
        await db.Users.destroy({where: {id}})
        res.status(200).send(`User id ${id} successfully destroyed!`)
    }
    catch(err) {
        res.status(400).send('Something went wrong!')
    }
})

export default router;