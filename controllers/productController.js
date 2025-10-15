import { Product } from "../models/product.model.js";

function add(req, res) {
    // Validate request.
    const product = req.body;
    if (!product.id || !product.title || !product.sku || !product.price) {
        res
            .status(400)
            .json({
                status: 'Bad Request'
            });

        return;
    }

    Product.add(product);

    res
        .status(201)
        .json({
            status: 'Created'
        });
}

function getAll(req, res) {
    res
        .status(200)
        .json({
            status: 'OK',
            products: Product.getAll()
        });
}

function getById(req, res) {
    const id = Number(req.params.id);

    // Validate id.
    if (!Number.isInteger(id)) {
        res
            .status(400)
            .json({
                status: 'Bad Request'
            });

        return;
    }

    const product = Product.getById(id);

    if (!product) {
        res
            .status(404)
            .json({
                status: 'Not Found'
            });

        return;
    }

    res
        .status(200)
        .json({
            status: 'OK',
            product: product
        });
}

function update(req, res) {
    const id = Number(req.params.id);

    // Validate request.
    const data = req.body;
    if ((data.title && data.title === '') || (data.sku && data.sku === '') || (data.price && data.price <= 0)) {
        res
            .status(400)
            .json({
                status: 'Bad Request'
            });

        return;
    }

    if (!Product.update(id, data)) {
        res
            .status(404)
            .json({
                status: 'Not Found'
            });

        return;
    }

    res
        .status(200)
        .json({
            status: 'OK'
        });
}

function remove(req, res) {
    const id = Number(req.params.id);

    // Validate id.
    if (!Number.isInteger(id)) {
        res
            .status(400)
            .json({
                status: 'Bad Request'
            });

        return;
    }

    if (!Product.remove(id)) {
        res
            .status(404)
            .json({
                status: 'Not Found'
            });

        return;
    }

    res
        .status(200)
        .json({
            status: 'OK'
        });
}

export {
    add,
    getAll,
    getById,
    update,
    remove
};
