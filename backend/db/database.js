import mongoose from 'mongoose'

export const database = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI)
    console.log(`Mongo Database Connected: ${connect.connection.host}`.bgYellow)
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold)
    process.exit(1)
  }
}
