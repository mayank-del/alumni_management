const express = require('express');
const { registerAlumni, loginAlumni, getAllAccounts, getApplicants, getAllAlumni, approveApplicants } = require('../controllers/alumni.controllers');
const { checkAlumni, checkAdmin, } = require('../middleware/authMiddleware')
const router = express.Router();

router.post('/register', registerAlumni);

router.post('/login', loginAlumni);

router.get('/',getAllAlumni)

router.get('/accounts', checkAdmin, getAllAccounts);

router.get('/applicants', checkAdmin, getApplicants);

router.post('/approve-alumni/:id',checkAdmin, approveApplicants)


module.exports = router;