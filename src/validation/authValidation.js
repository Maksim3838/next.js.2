import { Joi, Segments } from "celebrate"; 

export const registerUsersShema = {
    [Segments.BODY]: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(16).required(),
    })
}