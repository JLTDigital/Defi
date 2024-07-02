import asyncHandler from 'express-async-handler'
import Literature from '../schema/Literature.js'

// @desc - Get all Literature links
// @route - GET /api/literature
// @access - public
export const getLiterature = asyncHandler(async (req, res) => {
  const literature = await Literature.find({})

  if (literature) {
    res.json(literature)
  } else {
    res.status(404)
    throw new Error('No Literature Resources Found')
  }
})