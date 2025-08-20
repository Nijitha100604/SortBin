import express from 'express'
import {adminLogin, getTotalBins, allUsers} from './../controllers/adminController.js'
//import adminAuth from './../middlewares/adminAuth.js';

const adminRouter = express.Router()

adminRouter.post('/admin-login', adminLogin)
adminRouter.get('/totalBins', getTotalBins)
adminRouter.get('/users', allUsers)

export default adminRouter