const express = require('express');
const { registerAlumni, getAllAlumni, authAlumni } = require('../controllers/user.controllers');
const { checkAlumni, checkAdmin } = require('../middleware/authMiddleware')
const router = express.Router();

router.post('/register', registerAlumni);
router.get('/', checkAdmin, getAllAlumni);
router.post('/login', authAlumni)

module.exports = router;