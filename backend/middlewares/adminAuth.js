import jwt from 'jsonwebtoken'

const adminAuth = async(req, res, next) =>{
    try{
        const {aToken} = req.headers
        console.log(aToken)
        if(!aToken)
        {
            return res.json({success: false, message: "Not authorized Login again"})
        }
        const token_decode = jwt.sign(aToken, process.env.JWT_SECRET)
        if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD)
        {
            return res.json({success: false, message: "Not equal"})
        }
        next()
    } catch(error){
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

export default adminAuth