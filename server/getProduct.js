// const products = require('../products.json');

// const getProduct = (req,res) => {
//     if(req.query.price){
//         const productPrice = products.find(product => product.price >= parseInt(req.query.price))
//          res.json(productPrice);
        
//         }else{
//             res.status(200).json('not on the list');
//         }
// }

const products = require('../products.json');

const getProduct = (req, res) => {
    // find returns the item if it finds it, or undefined if not
    const item = products.find(product => product.id === parseInt(req.params.id));
    if (item) {
        res.status(200).json(item);
    }
    return res.status(404).json("Item not in list");
}


module.exports  = getProduct