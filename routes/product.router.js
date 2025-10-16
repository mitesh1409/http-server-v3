import express from 'express';

import * as ProductController from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.use((req, res, next) => {
    console.log('Middleware for the productRouter...');
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
productRouter.post('/', ProductController.add);

// GET /products => Get a list of products. R in CRUD.
productRouter.get('/', ProductController.getAll);

// GET /products/{product} => Get a product (e.g., by ID). R in CRUD.
productRouter.get('/:id', ProductController.getById);

// PUT/PATCH /products/{product} => Update a product (e.g., by ID). U in CRUD.
productRouter.patch('/:id', ProductController.update);

// DELETE /products/{product} => Delete a product (e.g., by ID). D in CRUD.
productRouter.delete('/:id', ProductController.remove);

export { productRouter };
