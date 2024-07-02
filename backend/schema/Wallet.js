import mongoose from 'mongoose'

const { Schema } = mongoose

const walletSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  image: String
})

const Wallet = mongoose.model('Wallet', walletSchema)

export default Wallet