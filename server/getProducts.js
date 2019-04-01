const products = require('../products.json');

const getProducts = (req, res) => {
    if (req.query.price) {
        const items = products.filter(product => product.price >= parseInt(req.query.price));
        return res.status(200).json(items);
    }
    res.status(200).json(products);
}

module.exports = getProducts;