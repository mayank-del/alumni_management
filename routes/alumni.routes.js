const express = require('express');
const { registerAlumni, getAllAlumni, authAlumni } = require('../controllers/alumni.controllers');
const { checkAlumni, checkAdmin } = require('../middleware/authMiddleware')
const router = express.Router();

router.post('/register', registerAlumni);
router.get('/', checkAlumni, getAllAlumni);
router.post('/login', authAlumni); 

module.exports = router;