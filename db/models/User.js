import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    id: String,
    createdAt: Date,
    email: String,
    username: String,
    hash: String,
    spots: Array,
    drills: Array
  }
)

export default mongoose.models.User || mongoose.model('User', userSchema)
