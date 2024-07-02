import asyncHandler from 'express-async-handler'
import Links from '../schema/Links.js'

// @desc - Get all Links
// @route - GET /api/links
// @access - public
export const getLinks = asyncHandler(async (req, res) => {
  const links = await Links.find({})

  if (links) {
    res.json(links)
  } else {
    res.status(404)
    throw new Error('No Links Resources Found')
  }
})