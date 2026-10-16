
import { Router } from "express"
import { celebrate } from "celebrate";
import { registerUsers } from "../controllers/authController.js";
import{registerUsersShema} from "../validation/authValidation.js"

const router = Router();

router.post("/auth/register", celebrate(registerUsersShema), registerUsers);


export default router;