import mongoose from 'mongoose'

const metalSchema = new mongoose.Schema({

    userId: {type: String, required: true},
    count: {type: Number, default: 0},
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

metalSchema.statics.markAsCleaned = async function (id) {
    return this.findByIdAndUpdate(id, {
        lastCleanedAt: new Date()
    }, { new: true })
}

const metalModel = new mongoose.model('metal', metalSchema)
export default metalModel