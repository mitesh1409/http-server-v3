import express from 'express';

import * as UserController from '../controllers/userController.js';

const userRouter = express.Router();

// Middlewares
userRouter.use((req, res, next) => {
    console.log('Middleware for the userRouter...');
    next();
})

// Define REST APIs for the user resource here.
userRouter.post('/', UserController.add);
userRouter.get('/', UserController.getAll);
userRouter.get('/:id', UserController.getById);

export { userRouter };
