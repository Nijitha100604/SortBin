import mongoose from 'mongoose'

const plasticSchema = new mongoose.Schema({

    binName: {type: String, default: "Plastics"},
    count: {type: Number, default: 0},
    totalCount: {type: Number, default: 0},
    fillLevel: {type: Number, default: 0},
    hazardousGas: {type: Boolean, default: false},
    updatedAt: {type: Date, default: Date.now},
    lastCleanedAt: {type: Date, default: Date.now}

})

plasticSchema.pre('save', function (next) {
    if (this.isModified('count') || this.isModified('hazardousGas')) {
        this.updatedAt = new Date()
    }
    next()
})

export default plasticSchema