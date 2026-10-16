
import { User } from "../models/user.js";
import createHttpError from "http-errors";
import bcrypt from "bcrypt";

export const registerUsers = async (req, res) => {
  const { email, password } = req.body

  const existingUser = await User.findOne({ email })

  if (existingUser) {
    throw createHttpError(409, "Email in use")
  }

    const hashPasword = await bcrypt.hash(password, 10);

    const newUsers = await User.create({ email, password:hashPasword})
    

  res.status(201).json({newUsers
     })
}