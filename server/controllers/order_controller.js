const Order = require('../models/Order');
const CryptoJS = require('crypto-js');

module.exports.create = async function(req, res){

    const newOrder = new Order(req.body);

    try{
        const savedOrder = await newOrder.save();

        return res.status(201).json({
            order : savedOrder,
            msg : 'product created successfully'
        })
        
    }catch(err){
        return res.status(500).json(err);
    }
}

module.exports.updateOrder = async function(req, res){

    try{
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
            $set : req.body,
        }, {new : true});

        return res.status(201).json({
            Order : updatedOrder,
        })

    }catch(err){
        return res.status(500).json(err);
    }
}

module.exports.deleteOrder = async function(req, res){
    try{
        await User.findByIdAndDelete(req.params.id);
        return res.status(201).json({
            msg : 'your order has been deleted successfully',
        })

    }catch(err){
        return res.status(500).json(err);
    }
}


module.exports.getUserOrders = async function(req, res){
    try{
        const orders = await Order.find({userId : req.param.id});

        return res.status(201).json({
            orders : orders,
        })

    }catch(err){
        return res.status(500).json(err);
    }
}

// GET ALL USERS ORDERS
module.exports.getAllUsersOrders = async function(req, res){
    try{
        const orders = await Order.find();
        return res.status(201).json({
            orders : orders,
        })
    }catch(err){
        return res.status(500).json(err);
    }
}

// GET MONTHLY INCOME
module.exports.getMonthlyIncome = async function(req, res){

    const date = new Date(); // 1st aug

    const lastMonth = new Date(date.setMonth(date.getMonth()-1)); // 1st jul
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth()-1)); // 1st jun

    try{
        const income = await User.aggregate([
            {
                $match : {
                    createdAt : {
                        $gte : previousMonth,
                    }
                }
            },
            {
                $project : {
                    month : {
                        $month : "$createdAt",
                    },
                    sales : "$amount",
                }
            },
            {
                $group : {
                    _id : "$month",
                    total : {$sum : "$sales"},
                }
            }
        ])
        
        return res.status(201).json({
            income : income,
        })

    }catch(err){
        return res.status(500).json(err);
    }
}

