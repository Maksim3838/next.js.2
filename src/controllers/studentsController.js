import { request } from "express"
import { Student } from "../models/students.js"

export const getStudents = async (req, res) => {
  const students = await Student.find()

  res.status(200).json({ students })
}

export const getStudentsId = async (req, res) => {
  const { studentsId } = req.params

  res.status(200).json({ id: studentsId })
}

export const postStudent = async (req, res) => {
  console.log(req.body);
 const student= await Student.create(req.body);
  res.status(201).json({ student });
}

export const deleteStudent = async (req, res) => {
  const { studentsId } = req.params;
  const student = await Student.findOneAndDelete({ _id: studentsId })
  if (!student) {
    return res.status(404).json({ message: "Немае студента",})
  } res.status(200).json({ message: "Студент був видалений",})
}
export const patchStudent = async (req, res) => {
  const { studentsId } = req.params;
  const student = await Student.findByIdAndUpdate(studentsId ,req.body,{returnDocument:"after",})
  if (!student) {
    return res.status(404).json({ message: "Немае студента",})
  } res.status(200).json({ message: "Студент був оновлений", student,})
}