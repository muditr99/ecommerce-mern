const Product = require('../models/product');
const CryptoJS = require('crypto-js');

module.exports.create = async function(req, res){

    const newProduct = new Product(req.body);

    try{
        const savedProduct = await newProduct.save();

        return res.status(201).json({
            product : savedProduct,
            msg : 'product created successfully'
        })
        
    }catch(err){
        return res.status(500).json(err);
    }
}

module.exports.updateProduct = async function(req, res){

    try{
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set : req.body,
        }, {new : true});

        return res.status(201).json({
            user : updatedProduct,
        })

    }catch(err){
        return res.status(500).json(err);
    }
}

module.exports.deleteProduct = async function(req, res){
    try{
        await User.findByIdAndDelete(req.params.id);
        return res.status(201).json({
            msg : 'product has been deleted',
        })

    }catch(err){
        return res.status(500).json(err);
    }
}

module.exports.getProduct = async function(req, res){
    try{
        const product = await Product.findById(req.params.id);

        return res.status(201).json({
            product : product,
        })

    }catch(err){
        return res.status(500).json(err);
    }
}

module.exports.getAllProducts = async function(req, res){

    const qNew = req.query.id;
    const qCategory = req.query.category;

    try{
        let products;

        if(qNew){
            products = await User.find().sort({_id : -1}).limit(5);
        }else if(qCategory){
            products = await Product.find({categories : {
                $in : [qCategory],
            }})
        }else{
            products = await Product.find();
        }

        return res.status(201).json({
            products : products,
            msg : "list of all products"
        })

    }catch(err){
        return res.status(500).json(err);
    }
}

