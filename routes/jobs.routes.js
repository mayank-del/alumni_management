const express = require('express');
const { createJob, deleteJob , getJob, getJobs, updateJob} = require('../controllers/job.controllers');
const { checkAlumni, checkAdmin, } = require('../middleware/authMiddleware')
const router = express.Router();

router.post('/', checkAlumni, createJob);

router.get('/', getJobs);

router.get('/:id', getJob);

router.put('/:id',checkAlumni, updateJob);

router.delete('/:id',checkAlumni, deleteJob);

module.exports = router;