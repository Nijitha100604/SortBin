import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import userModel from './../models/userModel.js'
import {v2 as cloudinary} from 'cloudinary'

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
            const token = jwt.sign({id:user._id}, process.env.JWT_SECRET, {expiresIn: "3h"})
            res.json({success: true, token})
        }

    } catch(error){
        console.log(error)
        res.json({success: false, message: error.message})
    }

}

export {
    userRegister,
    userLogin
}