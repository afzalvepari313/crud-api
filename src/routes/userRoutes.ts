import { Router } from 'express';
import { UserController } from '../controllers/userController';
import { UserService } from '../services/userService';

const router = Router();
const userController = new UserController(new UserService()); // Create instances

router.get('/users/:id', userController.getUser); // Route for getting a user

export default router;
