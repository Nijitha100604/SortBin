import express from 'express'
import {adminLogin, 
        getTotalBins, 
        allUsers, 
        getAllFeedbacks, 
        cleanPlasticsBin, 
        cleanGeneralsBin, 
        cleanMetalsBin, 
        cleanInfectedsBin,
        plasticHazardousGas,
        generalHazardousGas,
        metalHazardousGas,
        infectedHazardousGas
    } from './../controllers/adminController.js'
//import adminAuth from './../middlewares/adminAuth.js';

const adminRouter = express.Router()

adminRouter.post('/admin-login', adminLogin)
adminRouter.get('/totalBins', getTotalBins)
adminRouter.get('/users', allUsers)
adminRouter.get('/feedbacks', getAllFeedbacks)

adminRouter.post('/clean-plastics', cleanPlasticsBin)
adminRouter.post('/clean-generals', cleanGeneralsBin)
adminRouter.post('/clean-metals', cleanMetalsBin)
adminRouter.post('/clean-infecteds', cleanInfectedsBin)

adminRouter.post('/plastic-hazardous', plasticHazardousGas)
adminRouter.post('/general-hazardous', generalHazardousGas)
adminRouter.post('/metal-hazardous', metalHazardousGas)
adminRouter.post('/infected-hazardous', infectedHazardousGas)

export default adminRouter