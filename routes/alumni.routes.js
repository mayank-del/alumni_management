const express = require('express');
const { registerAlumni, authAlumni, getAllAlumni, getApplicants } = require('../controllers/alumni.controllers');
const { checkAlumni, checkAdmin, } = require('../middleware/authMiddleware')
const router = express.Router();

router.post('/register', registerAlumni);
router.post('/login', authAlumni);
router.get('/', checkAdmin, getAllAlumni);
router.get('/applicants', checkAdmin, getApplicants);
router.post('/approve-alumni/:id',checkAdmin)


module.exports = router;