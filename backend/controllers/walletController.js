import asyncHandler from 'express-async-handler'
import Wallet from '../schema/Wallet.js'

// @desc - Get all Wallet Links
// @route - GET /api/wallet
// @access - public
export const getWallets = asyncHandler(async (req, res) => {
  const wallets = await Wallet.find({})

  if (wallets) {
    res.json(wallets)
  } else {
    res.status(404)
    throw new Error('No Wallet Resources Found')
  }
})