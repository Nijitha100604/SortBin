import mongoose from 'mongoose'

const generalSchema = new mongoose.Schema({

    userId: {type: String, required: true},
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

generalSchema.statics.markAsCleaned = async function (id) {
    return this.findByIdAndUpdate(id, {
        lastCleanedAt: new Date()
    }, { new: true })
}

const generalModel = new mongoose.model('general', generalSchema)
export default generalModel