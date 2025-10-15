const products = [
    {
        id: 1001,
        title: 'T-Shirt',
        sku: 'ABC-1001',
        price: 49900,
    },
    {
        id: 1002,
        title: 'Cap',
        sku: 'ABC-1002',
        price: 19900,
    },
    {
        id: 1003,
        title: 'Jeans',
        sku: 'ABC-1003',
        price: 99900,
    }
];

class Product {
    constructor() {}

    static getAll() {
        return products;
    }

    static getById(id) {
        return products.find(product => product.id === id);
    }

    static add(product) {
        products.push(product);
    }

    static update(id, data) {
        const targetIndex = products.findIndex(product => product.id === id);
        if (targetIndex === -1) {
            return false;
        }

        products[targetIndex].title = data.title ?? products[targetIndex].title;
        products[targetIndex].sku = data.sku ?? products[targetIndex].sku;
        products[targetIndex].price = data.price ?? products[targetIndex].price;

        return true;
    }

    static remove(id) {
        const targetIndex = products.findIndex(product => product.id === id);
        if (targetIndex === -1) {
            return false;
        }

        products.splice(targetIndex, 1);
        return true;
    }
}

export { Product };
