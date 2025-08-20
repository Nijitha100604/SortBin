import mongoose from 'mongoose'

const metalSchema = new mongoose.Schema({

    binName: {type: String, default: "Metals"},
    count: {type: Number, default: 0},
    totalCount: {type: Number, default: 0},
    fillLevel: {type: Number, default: 0},
    hazardousGas: {type: Boolean, default: false},
    updatedAt: {type:Date, default: Date.now},
    lastCleanedAt: {type:Date, default: Date.now()}

})

metalSchema.pre('save', function (next) {
    if (this.isModified('count') || this.isModified('hazardousGas')) {
        this.updatedAt = new Date()
    }
    next()
})

export default metalSchema