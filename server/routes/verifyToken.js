const jwt = require('jsonwebtoken');

const verifyToken = function(req, res, next){
    const authHeader = req.headers.token;
    if(authHeader){
        const token = authHeader.split(" ")[1];
        jwt.verify(token, 'shop', function(err, user){
            if(err){
                return res.status(403).json({
                    msg : 'Token is not valid!', 
                 })
            }
            req.user = user;
            next();
        })
    }else{
        return res.status(401).json({
            msg : 'You are not authenticated!',
        })
    }
}

const verifyTokenAndAuthorization = function(req, res, next){
    if(req.user.id === req.params.id || req.user.isAdmin){
        next();
    }else{
        return res.status(401).json({
            msg : 'You are not allowed to do that!',
        })
    }
}

const verifyTokenAndAdmin = function(req, res, next){
    if(req.user.isAdmin){
        next();
    }else{
        return res.status(401).json({
            msg : 'You are not allowed to do that!',
        })
    }
}

module.exports = { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin };