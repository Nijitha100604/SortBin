import jwt from 'jsonwebtoken'
import totalBinModel from '../models/admin/totalBinModel.js'
import userModel from './../models/userModel.js';
import feedbackModel from './../models/feedbackModel.js';

const adminLogin = async(req, res)=>{
    try{
        const {email, password} = req.body
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD)
        {
            const aToken = jwt.sign(email+password, process.env.JWT_SECRET)
            res.json({success: true, aToken})
        }
        else
        {
            res.json({success: false, message: "Invalid Credentials"})
        }
    } catch(error){
        console.log(error)
        res.json({success: false, message: error.message})
    }
}


const getTotalBins = async(req, res) =>{
    try{

        const bins = await totalBinModel.find({})
        res.json({success: true, bins})

    } catch(error){

        console.log(error)
        res.json({success: false, message: error.message})
        
    }
}

const allUsers = async(req, res) =>{

    try{

        const users = await userModel.find().select("-password")
        if(!users || users.length == 0)
        {
            return res.json({success: false, message: "No Users Found"})
        }
        res.json({success: true, users})

    } catch(error){
        console.log(error)
        res.json({success: false, message: error.message})
    }
}


const getAllFeedbacks = async(req, res)=>{
    try{
        const feedbacks = await feedbackModel.find({})
        if(!feedbacks)
        {
            return res.json({success: false, message: "No Feedbacks found"})
        }
        res.json({success: true, feedbacks})
    } catch(error){
        console.log(error)
        res.json({success: false, message: error.message})
    }
}


const cleanPlasticsBin = async(req,res) =>{
    try{
        const {email} = req.body
        const user = await userModel.findOne({email})
        if(!user)
        {
            return res.json({success: false, message: "User not found"})
        }

        const bin = user.plasticsData
        bin.count = 0
        bin.fillLevel = 0
        bin.hazardousGas = false
        bin.lastCleanedAt = new Date()

        await user.save()
        res.json({success: true, message: "Plastic Bin cleaned"})

    } catch(error){
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

const cleanGeneralsBin = async(req,res) =>{
    try{
        const {email} = req.body
        const user = await userModel.findOne({email})
        if(!user)
        {
            return res.json({success: false, message: "User not found"})
        }

        const bin = user.generalsData
        bin.count = 0
        bin.fillLevel = 0
        bin.hazardousGas = false
        bin.lastCleanedAt = new Date()

        await user.save()
        res.json({success: true, message: "General Bin cleaned"})

    } catch(error){
        console.log(error)
        res.json({success: false, message: error.message})
    }
}


const cleanMetalsBin = async(req,res) =>{
    try{
        const {email} = req.body
        const user = await userModel.findOne({email})
        if(!user)
        {
            return res.json({success: false, message: "User not found"})
        }

        const bin = user.metalsData
        bin.count = 0
        bin.fillLevel = 0
        bin.hazardousGas = false
        bin.lastCleanedAt = new Date()

        await user.save()
        res.json({success: true, message: "Metal Bin cleaned"})

    } catch(error){
        console.log(error)
        res.json({success: false, message: error.message})
    }
}


const cleanInfectedsBin = async(req,res) =>{
    try{
        const {email} = req.body
        const user = await userModel.findOne({email})
        if(!user)
        {
            return res.json({success: false, message: "User not found"})
        }

        const bin = user.infectedsData
        bin.count = 0
        bin.fillLevel = 0
        bin.hazardousGas = false
        bin.lastCleanedAt = new Date()

        await user.save()
        res.json({success: true, message: "Infectious Bin cleaned"})

    } catch(error){
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

const plasticHazardousGas = async(req, res) =>{

    try{
        const {email} = req.body
        const user = await userModel.findOne({email})
        if(!user)
        {
            return res.json({success: false, message: "User not found"})
        }

        user.plasticsData.hazardousGas = false
        user.plasticsData.updatedAt = new Date()

        await user.save()
        res.json({success: true, message: "Hazardous Gas cleared"})

    } catch(error){
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

const generalHazardousGas = async(req, res) =>{

    try{
        const {email} = req.body
        const user = await userModel.findOne({email})
        if(!user)
        {
            return res.json({success: false, message: "User not found"})
        }

        user.generalsData.hazardousGas = false
        user.generalsData.updatedAt = new Date()

        await user.save()
        res.json({success: true, message: "Hazardous Gas cleared"})

    } catch(error){
        console.log(error)
        res.json({success: false, message: error.message})
    }
}


const metalHazardousGas = async(req, res) =>{

    try{
        const {email} = req.body
        const user = await userModel.findOne({email})
        if(!user)
        {
            return res.json({success: false, message: "User not found"})
        }

        user.metalsData.hazardousGas = false
        user.metalsData.updatedAt = new Date()

        await user.save()
        res.json({success: true, message: "Hazardous Gas cleared"})

    } catch(error){
        console.log(error)
        res.json({success: false, message: error.message})
    }
}


const infectedHazardousGas = async(req, res) =>{

    try{
        const {email} = req.body
        const user = await userModel.findOne({email})
        if(!user)
        {
            return res.json({success: false, message: "User not found"})
        }

        user.infectedsData.hazardousGas = false
        user.infectedsData.updatedAt = new Date()

        await user.save()
        res.json({success: true, message: "Hazardous Gas cleared"})

    } catch(error){
        console.log(error)
        res.json({success: false, message: error.message})
    }
}


export {adminLogin, 
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
    }