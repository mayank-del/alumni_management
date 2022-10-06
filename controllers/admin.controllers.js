const models = require('../models');
const asynHandler = require('express-async-handler');
const { generateToken } = require('../utils/generateToken');

// @desc   Auth admin & get token
// @route  POST /api/admin/login
// @access Public

exports.authAdmin = asynHandler(async (req, res) => {
    const { email, password } = req.body;
    const admin = await models.Admin.findOne({ where: { email: email } });
    if (admin && (await admin.matchPassword(password))) {
            res.json({
                id:admin.id,
                name:admin.name,
                email: admin.email,
                token: generateToken(admin.id,"admin")
            })   
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
})