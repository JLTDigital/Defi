import mongoose from 'mongoose'

const { Schema } = mongoose

const linksSchema = new Schema({
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
  image: String
})

const Links = mongoose.model('Links', linksSchema)

export default Links