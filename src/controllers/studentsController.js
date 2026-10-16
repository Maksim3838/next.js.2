
import { Student } from "../models/students.js"

export const getStudents = async (req, res) => {
  const {
    search,
    avgMark,
    gender,
    page = 1,
    perPage = 5,
  } = req.query

  const filter = {};

  if (avgMark !== undefined) {
    filter.avgMark = { $gte: Number(avgMark) }
  }

  if (gender !== undefined) {
    filter.gender = gender
  }
  if (search !== undefined) {
    filter.name = {$regex: RegExp.escape(search), $options: "i"}
  }

  const currentPage = Number(page)
  const limit = Number(perPage)
  const skip = (currentPage - 1) * limit

  const [students, totalItems] = await Promise.all([
    Student.find(filter).skip(skip).limit(limit),
    Student.countDocuments(filter),
  ])

  const totalPage = Math.ceil(totalItems / limit)

  res.status(200).json({
    students,
    page: currentPage,
    perPage: limit,
    totalItems,
    totalPage,
  })
}

export const getStudentsId = async (req, res) => {
  const { studentsId } = req.params

  const student = await Student.findById(studentsId)

  if (!student) {
    return res.status(404).json({
      message: "Студента не знайдено",
    })
  }

  res.status(200).json({ student })
}

export const postStudent = async (req, res) => {
  const student = await Student.create(req.body)

  res.status(201).json({ student })
}

export const deleteStudent = async (req, res) => {
  const { studentsId } = req.params

  const student = await Student.findByIdAndDelete(studentsId)

  if (!student) {
    return res.status(404).json({
      message: "Студента не знайдено",
    })
  }

  res.status(200).json({
    message: "Студента видалено",
  })
}

export const patchStudent = async (req, res) => {
  const { studentsId } = req.params

  const student = await Student.findByIdAndUpdate(
    studentsId,
    req.body,
    {
      returnDocument: "after",
      runValidators: true,
    }
  )

  if (!student) {
    return res.status(404).json({
      message: "Студента не знайдено",
    })
  }

  res.status(200).json({
    message: "Дані студента оновлено",
    student,
  })
}
