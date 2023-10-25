import mongoose from 'mongoose'

const daySchema = new mongoose.Schema(
  {
    date: { type: String, required: true, unique: true},
    signUps: Number,
    activeUsers: [],
    combosTrained: Number,
    rangeAdditions: Number,
    rangeDuplications: Number,
    rangeEdits: Number,
    rangeDeletions: Number
  }
)

export default mongoose.models.Day || mongoose.model('Day', daySchema)
