import mongoose from 'mongoose'

const generalSchema = new mongoose.Schema({

    binName: {type: String, default: "General"},
    count: {type: Number, default: 0},
    totalCount: {type: Number, default: 0},
    fillLevel: {type: Number, default: 0},
    hazardousGas: {type: Boolean, default: false},
    updatedAt: {type:Date, default: Date.now},
    lastCleanedAt: {type:Date, default: Date.now()}

})

generalSchema.pre('save', function (next) {
    if (this.isModified('count') || this.isModified('hazardousGas')) {
        this.updatedAt = new Date()
    }
    next()
})

export default generalSchema