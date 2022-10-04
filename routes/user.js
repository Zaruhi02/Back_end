import express from 'express';
import { getUsers, createUser, deleteUser, updateUser, } from '../controllers/user.js';


const router = express.Router();


router.get('/users', getUsers)
router.post('/users', createUser)
router.delete('/users/:id', deleteUser)
router.put('/users/:id', updateUser)

export default router;