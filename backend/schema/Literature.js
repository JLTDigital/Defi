import mongoose from 'mongoose'

const { Schema } = mongoose

const literatureSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  author: {
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
  image: {
    type: String
  }
})

const Literature = mongoose.model('Literature', literatureSchema)

export default Literature