import mongoose from 'mongoose'

const totalBinSchema = new mongoose.Schema({
    plastics: {type: Number, default: 0},
    generals: {type: Number, default: 0},
    metals: {type: Number, default: 0},
    infectious: {type: Number, default: 0}
})

const totalBinModel = mongoose.model('totalBin',totalBinSchema)
export default totalBinModel