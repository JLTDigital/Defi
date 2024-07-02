import mongoose from 'mongoose'

const { Schema } = mongoose

const exchangesSchema = new Schema({
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

const Exchanges = mongoose.model('Exchanges', exchangesSchema)

export default Exchanges