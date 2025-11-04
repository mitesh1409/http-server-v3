import express from 'express';

import * as UserController from '../controllers/userController.js';

const userRouter = express.Router();

// Middlewares
userRouter.use((req, res, next) => {
    console.log('Middleware for the userRouter...');
    next();
})

// Define REST APIs for the user resource here.
// Create
userRouter.post('/', UserController.add);
// Read
userRouter.get('/', UserController.getAll);
userRouter.get('/:id', UserController.getById);
// Update
userRouter.patch('/:id', UserController.update);
// Delete
userRouter.delete('/:id', UserController.remove);

export { userRouter };
