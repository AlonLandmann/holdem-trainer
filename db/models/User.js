import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    id: String,
    admin: Boolean,
    createdAt: Date,
    email: { type: String, required: true, unique: true},
    username: String,
    hash: String,
    ranges: Array,
    sessions: Array,
  }
)

export default mongoose.models.User || mongoose.model('User', userSchema)
