import mongoose from 'mongoose'

const infectedSchema = new mongoose.Schema({

    userId: {type: String, required: true},
    binName: {type: String, default: "Infectious"},
    count: {type: Number, default: 0},
    totalCount: {type: Number, default: 0},
    fillLevel: {type: Number, default: 0},
    hazardousGas: {type: Boolean, default: false},
    updatedAt: {type: Date, default: Date.now},
    lastCleanedAt: {type: Date, default: Date.now}

})


infectedSchema.pre('save', function (next) {
    if (this.isModified('count') || this.isModified('hazardousGas')) {
        this.updatedAt = new Date()
    }
    next()
})

infectedSchema.statics.markAsCleaned = async function (id) {
    return this.findByIdAndUpdate(id, {
        lastCleanedAt: new Date()
    }, { new: true })
}


const infectedModel = new mongoose.model('infected', infectedSchema)
export default infectedModel