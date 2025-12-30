import express from 'express';
import { getStudents,addStudents } from '../controller/studentcontroller.js';
const router=express.Router();
router.get('/get-students',getStudents);
router.post('/add-student',addStudents);
export default router;