import express from 'express';
import { getAdminJobs, getAllJobs, getJobById, postJob } from '../controllers/job.controller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';
const router = express.Router();

router.post('/post', isAuthenticated, postJob);
router.get('/get', isAuthenticated, getAllJobs);
router.get('/get/:id', isAuthenticated, getJobById);
router.get('/getAdminJobs', isAuthenticated, getAdminJobs);

export default router;
