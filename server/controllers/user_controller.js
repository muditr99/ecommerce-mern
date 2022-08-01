const User = require('../models/user');
const CryptoJS = require('crypto-js');

module.exports.updateUser = async function(req, res){
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(req.body.password, "shop").toString();
    }

    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set : req.body,
        }, {new : true});

        return res.status(201).json({
            user : updatedUser,
        })

    }catch(err){
        return res.status(500).json(err);
    }
}

module.exports.deleteUser = async function(req, res){
    try{
        await User.findByIdAndDelete(req.params.id);
        return res.status(201).json({
            msg : 'user has been deleted',
        })

    }catch(err){
        return res.status(500).json(err);
    }
}

module.exports.getUser = async function(req, res){
    try{
        const user = await User.findById(req.params.id);

        const { password, ...others } = user._doc;

        return res.status(201).json({
            user : others,
        })

    }catch(err){
        return res.status(500).json(err);
    }
}

module.exports.getAllUsers = async function(req, res){
    try{
        const query = req.query.id;

        const users = query ? await User.find().sort({_id : -1}).limit(5) : await User.find();

        return res.status(201).json({
            users : users,
        })

    }catch(err){
        return res.status(500).json(err);
    }
}

module.exports.getUsersStats = async function(req, res){

    const date = new Date();

    const lastYear = new Date(date.setFullYear(date.getFullYear()-1));

    try{
        const data = await User.aggregate([
            {
                $match : {
                    createdAt : {
                        $gte : lastYear,
                    }
                }
            },
            {
                $project : {
                    month : {
                        $month : "$createdAt",
                    }
                }
            },
            {
                $group : {
                    _id : "$month",
                    total : {$sum : 1},
                }
            }
        ])
        
        return res.status(201).json({
            UsersStats : data,
        })

    }catch(err){
        return res.status(500).json(err);
    }
}