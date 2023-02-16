import mongoose from 'mongoose'

const spotSchema = new mongoose.Schema ({
  id: Number,
  title: String,
  history: Array,
  position: String,
  street: String,
  board: Array,
  options: Array,
  preflopMatrix: Array,
  postflopMatrix: Array
})

export default mongoose.models.Spot || mongoose.model('Spot', spotSchema)
