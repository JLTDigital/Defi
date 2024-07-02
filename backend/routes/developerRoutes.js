import express from 'express'
const router = express.Router()
import { 
  getDev
 } from '../controllers/developerController.js'

 router.route('/developer').get(getDev)

 export default router