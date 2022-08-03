const Cart = require('../models/Cart');
const CryptoJS = require('crypto-js');

module.exports.create = async function(req, res){

    const newCart = new Cart(req.body);

    try{
        const savedCart = await newCart.save();

        return res.status(201).json({
            cart : savedCart,
            msg : 'product created successfully'
        })
        
    }catch(err){
        return res.status(500).json(err);
    }
}

module.exports.updateCart = async function(req, res){

    try{
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set : req.body,
        }, {new : true});

        return res.status(201).json({
            cart : updatedCart,
        })

    }catch(err){
        return res.status(500).json(err);
    }
}

module.exports.deleteCart = async function(req, res){
    try{
        await User.findByIdAndDelete(req.params.id);
        return res.status(201).json({
            msg : 'your cart has been deleted successfully',
        })

    }catch(err){
        return res.status(500).json(err);
    }
}

// GET USER CART
module.exports.getCart = async function(req, res){
    try{
        const cart = await Cart.findOne({userId : req.param.id});

        return res.status(201).json({
            cart : cart,
        })

    }catch(err){
        return res.status(500).json(err);
    }
}

// GET ALL CARTS
module.exports.getAllCarts = async function(req, res){
    try{
        const carts = await Cart.find();
        return res.status(201).json({
            carts : carts,
        })
    }catch(err){
        return res.status(500).json(err);
    }
}


