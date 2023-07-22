const express = require('express')
const { faker } = require('@faker-js/faker')
const router = express.Router()

router.get('/', (req, res) => {
  const products = []
  const { size } = req.query
  const limit = size || 10
  for (let i = 0; i < limit; i++) {
    products.push({
      title: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.urlPicsumPhotos()
    })
  }
  res.json(products)
})

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter')
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  res.json({
    id,
    title: 'Red apple imported',
    price: '8'
  })
})

router.post('/', (req, res) => {
  const body = req.body
  res.json({
    message: 'created',
    data: body
  })
})

module.exports = router
