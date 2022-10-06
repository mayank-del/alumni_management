const express = require('express');
const { authAdmin } = require('../controllers/admin.controllers');
const {checkAdmin} = require('../middleware/authMiddleware')
const router = express.Router();

router.post('/login', authAdmin);


module.exports = router;