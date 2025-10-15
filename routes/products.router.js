import express from 'express';

import * as ProductController from '../controllers/productController.js';

const productsRouter = express.Router();

productsRouter.use((req, res, next) => {
    console.log('Middleware for the productsRouter...');
    next();
});

// RESTful APIs for the Product resource.
// Here the resource and route remains the same, we are just changing HTTP verbs.
// POST /products => Save a product. C in CRUD.
// GET /products => Get a list of products. R in CRUD.
// GET /products/{product} => Get a product (e.g., by ID). R in CRUD.
// PUT/PATCH /products/{product} => Update a product (e.g., by ID). U in CRUD.
// DELETE /products/{product} => Delete a product (e.g., by ID). D in CRUD.

// POST /products => Save a product. C in CRUD.
productsRouter.post('/', ProductController.add);

// GET /products => Get a list of products. R in CRUD.
productsRouter.get('/', ProductController.getAll);

// GET /products/{product} => Get a product (e.g., by ID). R in CRUD.
productsRouter.get('/:id', ProductController.getById);

// PUT/PATCH /products/{product} => Update a product (e.g., by ID). U in CRUD.
productsRouter.patch('/:id', ProductController.update);

// DELETE /products/{product} => Delete a product (e.g., by ID). D in CRUD.
productsRouter.delete('/:id', ProductController.remove);

export { productsRouter };
