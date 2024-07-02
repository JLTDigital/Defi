import asyncHandler from 'express-async-handler'
import Developer from '../schema/Developer.js'

// @desc - Get all Developer links
// @route - GET /api/developer
// @access - public
export const getDev = asyncHandler(async (req, res) => {
  const dev = await Developer.find({})

  if (dev) {
    res.json(dev)
  } else {
    res.status(404)
    throw new Error('No Dev Resources Found')
  }
})