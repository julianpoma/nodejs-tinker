const fs = require('fs');
const path = require('path');
const rootPath = require('../util/path');

const dbPath = path.join(rootPath, 'database', 'cart.json');

module.exports = class Cart {
    static getCart(callback) {
        fs.readFile(dbPath, (error, content) => {
            if (error) {
                callback(null)
            }
            callback(JSON.parse(content));
        });
    }

	static addProduct(productToBeAdded) {
		fs.readFile(dbPath, (error, content) => {
			//Read the cart, or create a new one
			let cart = { products: [], total: 0 };
			if (!error) {
				cart = JSON.parse(content);
			}

			// Analyze the cart => Find existing product
			const existingProductIndex = cart.products.findIndex((prod) => prod.id === productToBeAdded.id);
			const existingProduct = cart.products[existingProductIndex];

			// Add new product or increase quantity
			let updatedProduct;
			if (existingProduct) {
				updatedProduct = { ...existingProduct };
				updatedProduct.quantity++;
				cart.products[existingProductIndex] = updatedProduct;
			} else {
                updatedProduct = { id: productToBeAdded.id, quantity: 1 };
				cart.products = [ ...cart.products, updatedProduct ];
			}
			cart.total = cart.total + +productToBeAdded.price;

			fs.writeFile(dbPath, JSON.stringify(cart), (error) => {
				console.log(err);
			});
		});
    }
    
    static deleteProduct(productToBeDeleted) {
        fs.readFile(dbPath, (error, content) => {
            //Read the cart, or create a new one
            if (error) {
                return true;
            }

            const cart = JSON.parse(content);

            const updatedCart = {...cart};
            const index = updatedCart.products.findIndex(p => p.id === productToBeDeleted.id);
            const cartProduct = updatedCart.products[index];

            updatedCart.products.splice(index, 1);
            updatedCart.price -= productToBeDeleted.price * cartProduct.quantity;

            fs.writeFile(dbPath, JSON.stringify(updatedCart), (error) => {
                console.log(err);
            });
        });
    }
};
