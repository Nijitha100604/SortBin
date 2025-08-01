import express from 'express'
import {userRegister, userLogin, userFeedback} from './../controllers/userController.js'
import userAuth from '../middlewares/userAuth.js'

const userRouter = express.Router()

userRouter.post('/register', userRegister)
userRouter.post('/login', userLogin)
userRouter.post('/user-feedback', userAuth, userFeedback)

export default userRouter