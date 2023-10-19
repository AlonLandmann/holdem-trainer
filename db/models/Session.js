import mongoose from 'mongoose'

const sessionSchema = new mongoose.Schema(
  {
    id: String,
    createdAt: Date,
    userEmail: String
  }
)

export default mongoose.models.Session || mongoose.model('Session', sessionSchema)