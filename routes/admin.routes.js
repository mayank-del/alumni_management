const express = require('express');
const { authAdmin } = require('../controllers/admin.controllers')
const router = express.Router();

router.post('/login', authAdmin)

module.exports = router;