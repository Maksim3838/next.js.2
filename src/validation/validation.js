
import { Joi, Segments } from "celebrate"
import { isValidObjectId } from "mongoose"

export const validationShema = {
  [Segments.BODY]: Joi.object({
    name: Joi.string().min(3).max(20).required(),
    age: Joi.number().min(12).integer().required(),
    gender: Joi.string().valid("male", "female").required(),
    avgMark: Joi.number().min(2).max(12).required(),
    onDuty: Joi.boolean(),
  }),
}

const validationShemaId = (value, helpers) => {
  if (isValidObjectId(value)) {
    return value
  }

  return helpers.message("Invalid ID format")
}

export const studensParamstShema = {
  [Segments.PARAMS]: Joi.object({
    studentsId: Joi.string().custom(validationShemaId).required(),
  }),
}


export const patchValidationShema = {
  [Segments.BODY]: Joi.object({
    name: Joi.string().min(3).max(20),
    age: Joi.number().min(12).integer(),
    gender: Joi.string().valid("male", "female"),
    avgMark: Joi.number().min(2).max(12),
    onDuty: Joi.boolean(),
  }).min(1),
   ...studensParamstShema,
}

export const studensShema = {
  [Segments.QUERY]: Joi.object({
    page: Joi.number().integer().min(1),
  perPage:Joi.number().integer().min(10).max(50),
  }),
}