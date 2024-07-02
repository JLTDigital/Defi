import express from 'express'
const router = express.Router()
import { 
  getLiterature 
} from '../controllers/literatureController.js'

router.route('/literature').get(getLiterature)

export default router