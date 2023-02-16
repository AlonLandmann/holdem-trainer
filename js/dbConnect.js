import mongoose from 'mongoose'

const connection = {}

mongoose.set('strictQuery', false) // temporary necessity until update

export default async function dbConnect() {
  if (!connection.isConnected) {
    const dbUri = process.env.MONGO_URI
    const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true }
    const db = await mongoose.connect(dbUri, dbOptions)
    
    connection.isConnected = db.connections[0].readyState
  }
}
