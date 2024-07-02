import mongoose from 'mongoose'

const { Schema } = mongoose

const developerSchema = new Schema({
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

const Developer = mongoose.model('Developer', developerSchema)

export default Developer