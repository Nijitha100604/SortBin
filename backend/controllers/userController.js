import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import userModel from './../models/userModel.js'
import feedbackModel from '../models/feedbackModel.js'
import plasticModel from '../models/plasticModel.js'
import metalModel from './../models/metalModel.js';
import generalModel from '../models/generalModel.js'
import infectedModel from '../models/infectedModel.js'

// API to register a user

const userRegister = async(req,res) =>{

    try{

    const {name, email, password, phone} = req.body
    if(!name || !email || !password || !phone)
    {
        return res.json({success: false, message:"Please fill all the details!"})
    }

    if(!validator.isEmail(email))
    {
        return res.json({success: false, message: "Please provide valid email!"})
    }

    const existingUser = await userModel.findOne({email})
    if(existingUser)
    {
        return res.json({success: false, message: "Email already registered"})
    }

    if(password.length < 8)
    {
        return res.json({success: false, message: "Password length should be greater than 8!"})
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const userData = {
        name,
        email,
        phone,
        password: hashedPassword
    }

    const newUser = new userModel(userData)
    const user = await newUser.save()

    const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)
    res.json({success: true, token})

    } catch(error){
        console.log(error)
        res.json({success: false, message: error.message})
    }

}

// API to login a user

const userLogin = async(req, res) =>{

    try{

        const {email, password} = req.body
        const user = await userModel.findOne({email})
        if(!user)
        {
            return res.json({success: false, message:"User not found"})
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch)
        {
            return res.json({success: false, message: "Incorrect password"})
        }
        else
        {
            const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)
            res.json({success: true, token})
        }

    } catch(error){
        console.log(error)
        res.json({success: false, message: error.message})
    }

}

// API to post a feedback

const userFeedback = async(req,res) =>{
    try{
        const {name, email, message} = req.body
        const userId = req.user.userId;

        if(!validator.isEmail(email))
        {
            return res.json({success: false, message: "Please enter a valid email"})
        }

        const feedbackData = {
            userId,
            name, 
            email,
            message
        }

        const newFeedback = new feedbackModel(feedbackData)
        const feedback = await newFeedback.save()

        res.json({success: true, message: "Feedback Submitted"})


    } catch(error){
        console.log(error)
        res.json({success: false, message: error.message})
    }
}


// API to create a plastic Bin

const addPlasticBin = async(req, res) =>{
    try{

        const userId = req.user.userId
        const binData = {
            userId
        }

        const newPlasticBin = new plasticModel(binData)
        const plasticBin = await newPlasticBin.save()
        res.json({success: true, message: "Plastic bin created"})


    } catch(error){
        console.log(error)
        res.json({success: false, message: error.message})
    }
}


// API for getting plastic details

const getPlasticDetails = async(req, res)=>{

    try{

        const userId = req.user.userId
        const user = await userModel.findById(userId)
        if(!user)
        {
            res.json({success: false, message: "Not a valid user"})
        }

        const bin = await plasticModel.find({userId})

        res.json({success: true, bin})


    } catch(error){
        console.log(error)
        res.json({success: false, message: error.message})
    }
}


// API for updating the plastic bin details

const updatePlasticBin = async(req, res) =>{
    try{

        const userId = req.user.userId
        const bin = await plasticModel.findOne({userId})

        if(!bin){
            return res.json({success: false, message: "Bin not found"})
        }

        bin.count += 1
        bin.totalCount += 1
        const maxCapacity = 15
        bin.fillLevel = Math.min(Math.round((bin.count/maxCapacity)*100), 100)
        await bin.save()

        res.json({success: true, message: "Plastic detected and bin updated"})

    } catch(error){
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

// API for update plastic hazardous gas

const plasticHazardousGas = async(req, res)=>{
    try{

        const userId =req.user.userId
        const bin = await plasticModel.findOne({userId})

        if(!bin)
        {
            return res.json({success: false, message: "Bin not found"})
        }

        bin.hazardousGas = true
        await bin.save()
        res.json({success: true, message: "Hazardous Gas detected"})

    } catch(error){
        console.log(error)
        res.json({success: false, message: error.message})
    }
}


// API to clean plastic bin

const cleanPlasticBin = async(req, res)=>{
    try{
        const userId = req.user.userId
        const bin = await plasticModel.findOne({userId})
        if(!bin)
        {
            return res.json({success: false, message: "Bin not found"})
        }
        bin.count = 0
        bin.fillLevel = 0
        bin.hazardousGas = false
        bin.lastCleanedAt = new Date()
        
        await bin.save()
        res.json({success: true, message: "Plastic Bin cleaned successfully"})

    } catch(error){
        console.log(error)
        res.json({success: false, message: error.message})
    }
}


// API to add a metal bin

const addMetalBin = async(req, res) =>{
    try{

        const userId = req.user.userId
        const binData = {
            userId
        }

        const newMetalBin = new metalModel(binData)
        const metalBin = await newMetalBin.save()
        res.json({success: true, message: "Metal bin created"})


    } catch(error){
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

// API to get metal bin details

const getMetalDetails = async(req, res)=>{

    try{

        const userId = req.user.userId
        const user = await userModel.findById(userId)
        if(!user)
        {
            res.json({success: false, message: "Not a valid user"})
        }

        const bin = await metalModel.find({userId})

        res.json({success: true, bin})


    } catch(error){
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

// API to update the metal bin

const updateMetalBin = async(req, res) =>{
    try{

        const userId = req.user.userId
        const bin = await metalModel.findOne({userId})

        if(!bin){
            return res.json({success: false, message: "Bin not found"})
        }

        bin.count += 1
        bin.totalCount += 1
        const maxCapacity = 15
        bin.fillLevel = Math.min(Math.round((bin.count/maxCapacity)*100), 100)
        await bin.save()

        res.json({success: true, message: "Metal detected and bin updated"})

    } catch(error){
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

// API to update metal hazardous gas

const metalHazardousGas = async(req, res)=>{
    try{

        const userId =req.user.userId
        const bin = await metalModel.findOne({userId})

        if(!bin)
        {
            return res.json({success: false, message: "Bin not found"})
        }

        bin.hazardousGas = true
        await bin.save()
        res.json({success: true, message: "Hazardous Gas detected"})

    } catch(error){
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

// API to clean the metal bin

const cleanMetalBin = async(req, res)=>{
    try{
        const userId = req.user.userId
        const bin = await metalModel.findOne({userId})
        if(!bin)
        {
            return res.json({success: false, message: "Bin not found"})
        }
        bin.count = 0
        bin.fillLevel = 0
        bin.hazardousGas = false
        bin.lastCleanedAt = new Date()
        
        await bin.save()
        res.json({success: true, message: "Metals Bin cleaned successfully"})

    } catch(error){
        console.log(error)
        res.json({success: false, message: error.message})
    }
}


// API to add general wastes

const addGeneralBin = async(req, res) =>{
    try{

        const userId = req.user.userId
        const binData = {
            userId
        }

        const newGeneralBin = new generalModel(binData)
        const generalBin = await newGeneralBin.save()
        res.json({success: true, message: "General bin created"})


    } catch(error){
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

// API to get general wastes

const getGeneralDetails = async(req, res)=>{

    try{

        const userId = req.user.userId
        const user = await userModel.findById(userId)
        if(!user)
        {
            res.json({success: false, message: "Not a valid user"})
        }

        const bin= await generalModel.find({userId})

        res.json({success: true, bin})


    } catch(error){
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

// API to update general wastes

const updateGeneralBin = async(req, res) =>{
    try{

        const userId = req.user.userId
        const bin = await generalModel.findOne({userId})

        if(!bin){
            return res.json({success: false, message: "Bin not found"})
        }

        bin.count += 1
        bin.totalCount += 1
        const maxCapacity = 15
        bin.fillLevel = Math.min(Math.round((bin.count/maxCapacity)*100), 100)
        await bin.save()

        res.json({success: true, message: "General detected and bin updated"})

    } catch(error){
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

// API to update general hazardous gas

const generalHazardousGas = async(req, res)=>{
    try{

        const userId =req.user.userId
        const bin = await generalModel.findOne({userId})

        if(!bin)
        {
            return res.json({success: false, message: "Bin not found"})
        }

        bin.hazardousGas = true
        await bin.save()
        res.json({success: true, message: "Hazardous Gas detected"})

    } catch(error){
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

// API to clean general wastes

const cleanGeneralBin = async(req, res)=>{
    try{
        const userId = req.user.userId
        const bin = await generalModel.findOne({userId})
        if(!bin)
        {
            return res.json({success: false, message: "Bin not found"})
        }
        bin.count = 0
        bin.fillLevel = 0
        bin.hazardousGas = false
        bin.lastCleanedAt = new Date()
        
        await bin.save()
        res.json({success: true, message: "General Bin cleaned successfully"})

    } catch(error){
        console.log(error)
        res.json({success: false, message: error.message})
    }
}


// API to add infectious wastes

const addInfectedBin = async(req, res) =>{
    try{

        const userId = req.user.userId
        const binData = {
            userId
        }

        const newInfectedBin = new infectedModel(binData)
        const infectedBin = await newInfectedBin.save()
        res.json({success: true, message: "Infected bin created"})


    } catch(error){
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

// API to get details of infectious waste

const getInfectedDetails = async(req, res)=>{

    try{

        const userId = req.user.userId
        const user = await userModel.findById(userId)
        if(!user)
        {
            res.json({success: false, message: "Not a valid user"})
        }

        const bin = await infectedModel.find({userId})

        res.json({success: true, bin})


    } catch(error){
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

// API to update the infectious waste

const updateInfectedBin = async(req, res) =>{
    try{

        const userId = req.user.userId
        const bin = await infectedModel.findOne({userId})

        if(!bin){
            return res.json({success: false, message: "Bin not found"})
        }

        bin.count += 1
        bin.totalCount += 1
        const maxCapacity = 15
        bin.fillLevel = Math.min(Math.round((bin.count/maxCapacity)*100), 100)
        await bin.save()

        res.json({success: true, message: "Infectious waste detected and bin updated"})

    } catch(error){
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

// API to update the infectious hazardous gas

const infectedHazardousGas = async(req, res)=>{
    try{

        const userId =req.user.userId
        const bin = await infectedModel.findOne({userId})

        if(!bin)
        {
            return res.json({success: false, message: "Bin not found"})
        }

        bin.hazardousGas = true
        await bin.save()
        res.json({success: true, message: "Hazardous Gas detected"})

    } catch(error){
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

// API to clean the infectious wastes

const cleanInfectedBin = async(req, res)=>{
    try{
        const userId = req.user.userId
        const bin = await infectedModel.findOne({userId})
        if(!bin)
        {
            return res.json({success: false, message: "Bin not found"})
        }
        bin.count = 0
        bin.fillLevel = 0
        bin.hazardousGas = false
        bin.lastCleanedAt = new Date()
        
        await bin.save()
        res.json({success: true, message: "Infectious Bin cleaned successfully"})

    } catch(error){
        console.log(error)
        res.json({success: false, message: error.message})
    }
}


export {
    userRegister,
    userLogin,
    userFeedback,
    addPlasticBin,
    getPlasticDetails,
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
}