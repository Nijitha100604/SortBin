import jwt from 'jsonwebtoken'
import totalBinModel from '../models/admin/totalBinModel.js'
import userModel from './../models/userModel.js';

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



export {adminLogin, getTotalBins, allUsers}