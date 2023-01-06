import * as userController from '../controllers/user.controller';
import { Router } from 'express';

const router=Router();

router.get('/', userController.getUsers);
router.get('/:id', userController.getUser)
router.post('/:id', userController.updateUser)
router.post('/add', userController.createUser);

export default router;