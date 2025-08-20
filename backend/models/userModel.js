import mongoose from 'mongoose'
import plasticSchema from './plasticModel.js'
import metalSchema from './metalModel.js'
import infectedSchema from './infectedModel.js'
import generalSchema from './generalModel.js'

const userSchema = new mongoose.Schema({

    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    phone: {type: String, default: "0000000000"},

    plasticsData: {type: plasticSchema, default: ()=>({})},
    metalsData: {type: metalSchema, default: ()=> ({})},
    infectedsData: {type: infectedSchema, default: ()=>({})},
    generalsData: {type: generalSchema, default: ()=>({})}

})

const userModel = mongoose.model.user || mongoose.model('user',userSchema)
export default userModel