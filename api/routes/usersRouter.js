const express = require('express')
const { faker } = require('@faker-js/faker')
const router = express.Router()

router.get('/', (req, res) => {
  const { limit, offset } = req.query
  if (limit && offset) {
    res.json({
      limit,
      offset
    })
  } else {
    res.send('No parameters')
  }
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  res.json({
    id,
    name: 'Wilson',
    roule: 'Full Stack Dev'
  })
})

module.exports = router
