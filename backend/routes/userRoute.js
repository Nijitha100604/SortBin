import express from 'express'

import {
        userRegister, 
        userLogin, 
        userFeedback, 
        getPlasticDetails, 
        addPlasticBin, 
        updatePlasticBin, 
        plasticHazardousGas, 
        cleanPlasticBin, 
        addMetalBin,
        getMetalDetails,
        updateMetalBin,
        metalHazardousGas,
        cleanMetalBin,
        addGeneralBin,
        getGeneralDetails,
        updateGeneralBin,
        generalHazardousGas,
        cleanGeneralBin,
        addInfectedBin,
        getInfectedDetails,
        updateInfectedBin,
        infectedHazardousGas,
        cleanInfectedBin
    } from './../controllers/userController.js'

import userAuth from '../middlewares/userAuth.js'

const userRouter = express.Router()

userRouter.post('/register', userRegister)
userRouter.post('/login', userLogin)
userRouter.post('/user-feedback', userAuth, userFeedback)

userRouter.post('/add-plastic-wastes', userAuth, addPlasticBin)
userRouter.get('/plastic-wastes', userAuth, getPlasticDetails)
userRouter.post('/update-plastic-wastes', userAuth, updatePlasticBin)
userRouter.post('/update-plastic-hazardous', userAuth, plasticHazardousGas)
userRouter.post('/clean-plastic-wastes', userAuth, cleanPlasticBin)

userRouter.post('/add-metal-wastes', userAuth, addMetalBin)
userRouter.get('/metal-wastes', userAuth, getMetalDetails)
userRouter.post('/update-metal-wastes', userAuth, updateMetalBin)
userRouter.post('/update-metal-hazardous', userAuth, metalHazardousGas)
userRouter.post('/clean-metal-wastes', userAuth, cleanMetalBin)

userRouter.post('/add-general-wastes', userAuth, addGeneralBin)
userRouter.get('/general-wastes', userAuth, getGeneralDetails)
userRouter.post('/update-general-wastes', userAuth, updateGeneralBin)
userRouter.post('/update-general-hazardous', userAuth, generalHazardousGas)
userRouter.post('/clean-general-wastes', userAuth, cleanGeneralBin)

userRouter.post('/add-infected-wastes', userAuth, addInfectedBin)
userRouter.get('/infected-wastes', userAuth, getInfectedDetails)
userRouter.post('/update-infected-wastes', userAuth, updateInfectedBin)
userRouter.post('/update-infected-hazardous', userAuth, infectedHazardousGas)
userRouter.post('/clean-infected-wastes', userAuth, cleanInfectedBin)

export default userRouter