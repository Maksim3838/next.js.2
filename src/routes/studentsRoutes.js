
import { Router } from "express";
import{getStudents, getStudentsId, postStudent,  deleteStudent,patchStudent } from "../controllers/studentsController.js"

const router = Router();

 router.get(`/students`, getStudents);
router.get(`/students/:studentsId`, getStudentsId);
router.post(`/students`, postStudent);
router.delete(`/students/:studentsId`, deleteStudent);
router.patch(`/students/:studentsId`,patchStudent);

export default router;