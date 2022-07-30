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