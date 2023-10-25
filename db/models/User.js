import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    id: String,
    admin: Boolean,
    createdAt: Date,
    email: String,
    username: String,
    hash: String,
    ranges: Array,
    sessions: Array,
  }
)

export default mongoose.models.User || mongoose.model('User', userSchema)
