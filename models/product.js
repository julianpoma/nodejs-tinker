const fs = require('fs');
const path = require('path');
const rootPath = require('../util/path');

module.exports = class Product {
	constructor(title) {
		this.title = title;
	}

	save() {
		const dbPath = path.join(rootPath, 'database', 'products.json');
		fs.readFile(dbPath, (error, content) => {
			let products = [];
			products = JSON.parse(content);
			products.push(this);
            fs.writeFile(dbPath, JSON.stringify(products), err => {
                if (err) {
                    return console.log(err);
                }
                console.log("File saved successfully!");
            });
		});
	}

	static fetchAll(callback) {
        const dbPath = path.join(rootPath, 'database', 'products.json');
        fs.readFile(dbPath, (error, content) => {
            if(error) {
                callback([]);
            }
            callback(JSON.parse(content));
        })
	}
};
