import mongoose from 'mongoose'

const { Schema } = mongoose

const dappsSchema = new Schema({
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

const Dapps = mongoose.model('Dapps', dappsSchema)

export default Dapps