import express from 'express'
const router = express.Router()
import { 
  getLinks
} from '../controllers/linksController.js'

router.route('/links').get(getLinks)

export default router