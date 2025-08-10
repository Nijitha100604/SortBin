import mongoose from 'mongoose'

const plasticSchema = new mongoose.Schema({

    userId: {type: String, required: true},
    binName: {type: String, default: "Plastics"},
    count: {type: Number, default: 0},
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

plasticSchema.statics.markAsCleaned = async function (id) {
    return this.findByIdAndUpdate(id, {
        lastCleanedAt: new Date()
    }, { new: true })
}

const plasticModel = new mongoose.model('plastic', plasticSchema)
export default plasticModel