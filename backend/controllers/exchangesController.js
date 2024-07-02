import asyncHandler from 'express-async-handler'
import Exchanges from '../schema/Exchanges.js'

// @desc - Get all Exchanges links
// @route - GET /api/exchanges
// @access - public
export const getExchanges = asyncHandler(async (req, res) => {
  const exchanges = await Exchanges.find({})

  if (exchanges) {
    res.json(exchanges)
  } else {
    res.status(404)
    throw new Error('No Exchanges Resources Found')
  }
})