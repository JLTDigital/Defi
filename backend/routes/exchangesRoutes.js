import express from 'express'
const router = express.Router()
import { 
  getExchanges
 } from '../controllers/exchangesController.js'

 router.route('/exchanges').get(getExchanges)

 export default router