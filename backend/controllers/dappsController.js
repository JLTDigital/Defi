import asyncHandler from 'express-async-handler'
import Dapps from '../schema/Dapps.js'

// @desc - Get all apps with DeFi Category
// @route - GET /api/dapps/dapps
// @access - public
export const getDapps = asyncHandler(async (req, res) => {
  const defi = await Dapps.find({ category: 'DeFi' })

  if (defi) {
    res.json(defi)
  } else {
    res.status(404)
    throw new Error('No DeFi Apps Found')
  }
})

// @desc - Get all apps with Games Category
// @route - GET /api/dapps/games
// @access - public
export const getGames = asyncHandler(async (req, res) => {
  const games = await Dapps.find({ category: 'Games' })

  if (games) {
    res.json(games)
  } else {
    res.status(404)
    throw new Error('No Games Apps Found')
  }
})

// @desc - Get all apps with NFT Category
// @route - GET /api/dapps/nft
// @access - public
export const getNft = asyncHandler(async (req, res) => {
  const nft = await Dapps.find({ category: 'NFT' })

  if (nft) {
    res.json(nft)
  } else {
    res.status(404)
    throw new Error('No DeFi Apps Found')
  }
})
