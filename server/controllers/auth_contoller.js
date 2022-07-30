const User = require('../models/user');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

module.exports.register = function(req, res){
    User.create({
        username : req.body.username,
        email : req.body.email,
        password : CryptoJS.AES.encrypt(req.body.password, "shop").toString(),
    }, function(err, user){
        if(err){
            console.log('error in registering the user', err);
            return res.status(500).json({
               msg : 'error in registering the user', 
            })
        }
        return res.status(201).json({
            user : user,
        })
    })
}

module.exports.login = async function(req, res){
    try{
        const user = await User.findOne({username : req.body.username});

        // wrong username or user not signed up
        if(!user){
            return res.status(401).json({
                msg : 'wrong credentials!',
            });
        }

        const hashedPassword = CryptoJS.AES.decrypt(user.password, "shop");
 
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        // wrong password
        if(originalPassword !== req.body.password){
            return res.status(401).json({
                msg : 'wrong credentials!',
            });
        }

        const accessToken = jwt.sign({
            id : user._id,
            isAdmin : user.isAdmin,
        }, 'shop', {expiresIn : '3d'})

        const { password, ...others } = user._doc;

        return res.status(201).json({
            msg : 'Successfully Signed In!',
            user : others,
            accessToken,  
        })

    }catch(err){
        return res.status(500).json(err);
    }
}