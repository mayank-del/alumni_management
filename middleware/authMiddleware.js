const jwt = require('jsonwebtoken');
const models = require('../models');
const asyncHandler = require('express-async-handler');
const { where } = require('sequelize');

exports.checkAlumni = asyncHandler(async (req, res, next) => {
    let token;
    // console.log("protected route");
    // console.log(req.headers.authorization);
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.ALUMNI_SECRET_KEY);
            // console.log("decoded: ", decoded);
            const ar  = await models.Alumni.findByPk(decoded.id);
            // console.log(ar)
            req.user = ar.dataValues;
            // console.log(req.user.isApproved);
            if(!req.user.isApproved){
                res.status(401);
                console.log(req.user.isApproved, " not approved")
                throw new Error('You are registered , but you are not approved yet.')
            }    
            next();
        } catch (error) {
            res.status(401);
            throw new Error(error.message);
        }
    }
    if (!token) {
        res.status(401);
        throw new Error('Token not found')
    }
});

exports.checkAdmin = asyncHandler(async (req, res, next) => {
    console.log('admin protected')
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.ADMIN_SECRET_KEY);
            req.user = await models.Admin.findByPk(decoded.id);
            next();
        } catch (error) {
            res.status(401);
            throw new Error('Not authorized , token failed');
        }
    }
    if (!token) {
        res.status(401);
        throw new Error('Not Authorized , no token');
    }
}) 