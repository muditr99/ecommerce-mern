const User = require('../models/user');

module.exports.register = function(req, res){
    User.create({
        username : req.body.username,
        email : req.body.email,
        password : req.body.password,
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