import express from 'express'
const router = express.Router()
import { 
  getWallets
} from '../controllers/walletController.js'


router.route('/wallets').get(getWallets)

export default router