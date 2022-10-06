const express = require('express');
const {registerAlumni} = require('../controllers/user.controllers')
const router = express.Router();

router.post('/register',registerAlumni);



module.exports = router;