import express from 'express'
const router = express.Router()
import { 
  getDapps,
  getGames,
  getNft
 } from '../controllers/dappsController.js'

router.route('/dapps').get(getDapps)
router.route('/games').get(getGames)
router.route('/nft').get(getNft)

export default router