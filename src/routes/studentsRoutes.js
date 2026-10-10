
import { Router } from "express"
import {
  getStudents,
  getStudentsId,
  postStudent,
  deleteStudent,
  patchStudent,
} from "../controllers/studentsController.js"
import { celebrate } from "celebrate"
import {studensParamstShema,
  validationShema, patchValidationShema, studensShema
 } from "../validation/validation.js"

const router = Router()

router.get("/students", celebrate( studensShema), getStudents)
router.get("/students/:studentsId", celebrate(studensParamstShema), getStudentsId)

router.post("/students", celebrate(validationShema), postStudent)

router.delete(
  "/students/:studentsId",
  celebrate(studensParamstShema),
  deleteStudent
)

router.patch("/students/:studentsId",celebrate( patchValidationShema), patchStudent)

export default router