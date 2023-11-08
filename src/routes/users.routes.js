import { Router } from "express"
import passport from "passport"
import * as userController from "../controllers/users.controller.js"
import CustomError from "../services/Errors/CustomError.js"
import { EErrors } from "../services/errors/enums.js"
import { generateUserErrorInfo } from "../services/errors/info.js"

const userRouter = Router()

userRouter.post('/signin', passport.authenticate('register'), userController.postUser)

export default userRouter