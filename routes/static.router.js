import express from 'express';

import { homeController } from '../controllers/homeController.js';
import { mongodbController } from '../controllers/mongodbController.js';
import { expressController } from '../controllers/expressController.js';
import { reactController } from '../controllers/reactController.js';
import { nodejsController } from '../controllers/nodejsController.js';

const staticRouter = express.Router();

staticRouter.use((req, res, next) => {
    console.log('Middleware for the staticRouter...');
    next();
});

staticRouter.get('/', homeController);
staticRouter.get('/mongodb', mongodbController);
staticRouter.get('/express', expressController);
staticRouter.get('/react', reactController);
staticRouter.get('/nodejs', nodejsController);

export { staticRouter };
