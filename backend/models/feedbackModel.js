import mongoose from 'mongoose'

const feedbackSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    name: {type: String, required: true},
    email: {type: String, required: true},
    message: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
})

const feedbackModel = mongoose.model('feedback',feedbackSchema)
export default feedbackModel