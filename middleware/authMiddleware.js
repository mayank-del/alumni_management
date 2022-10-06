const jwt = require('jsonwebtoken');
const models = require('../models');
const asyncHandler = require('express-async-handler');

exports.checkAlumni = asyncHandler( async (req,res,next) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.ALUMNI_SECRET_KEY);
            req.user = await models.User.findByPk(decoded.id);
            next();
        }catch(error){
            res.status(401);
            throw new Error('Not authorized , token failed');
        }
    }
    if (!token) {
        res.status(401);
        throw new Error('Not Authorized , no token')
    }
});

exports.checkAdmin = asyncHandler(async (req,res,next) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.ADMIN_SECRET_KEY);
            req.user = await models.Admin.findByPk(decoded.id);
            next();
        }catch(error){
            res.status(401);
            throw new Error('Not authorized , token failed');
        }
    }
    if (!token) {
        res.status(401);
        throw new Error('Not Authorized , no token')
    }
}) 