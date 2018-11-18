const fs = require('fs');
const path = require('path');
const rootPath = require('../util/path');

const dbPath = path.join(rootPath, 'database', 'products.json');

const getProductsFromDB = (callback) => {
	fs.readFile(dbPath, (error, content) => {
		if (error) {
			callback([]);
		} else {
			callback(JSON.parse(content));
		}
	});
};

module.exports = class Product {
	constructor(id, title, imageUrl, description, price) {
		this.id = id;
		this.title = title;
		this.imageUrl = imageUrl;
		this.description = description;
		this.price = price;
	}

	save() {
		getProductsFromDB((products) => {
			products.push(this);
			fs.writeFile(dbPath, JSON.stringify(products), (err) => {
				if (err) console.log(err);
			});
		});
	}

	update() {
		getProductsFromDB((products) => {
			const index = products.findIndex((p) => p.id === this.id);
			const updatedProducts = [ ...products ];
			updatedProducts[index] = this;
			fs.writeFile(dbPath, JSON.stringify(updatedProducts), (err) => {
				if (err) console.log(err);
			});
		});
	}

	static fetchAll(callback) {
		getProductsFromDB(callback);
	}

	static findById(id, callback) {
		getProductsFromDB((products) => {
			const product = products.find((p) => p.id === id);
			callback(product);
        });

    }

    static delete(id) {
        getProductsFromDB((products) => {
            const index = products.findIndex(p => p.id === id);
            products.splice(index, 1);
            const updatedProducts = [...products];
            fs.writeFile(dbPath, JSON.stringify(updatedProducts), (err) => {
                if (err) console.log(err);
            });
        })
    }
};
