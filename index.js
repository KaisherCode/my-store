const express = require('express')
const { faker } = require('@faker-js/faker')
const app = express()
const port = 3000

// Path default
app.get('/', (req, res) => {
  res.send('Hello my first Express.js server')
})

// Path home
app.get('/home', (req, res) => {
  res.send('Hello, i am home page')
})

// new path
app.get('/new-path', (req, res) => {
  res.send('Hi, i am a new route')
})

// Product path
app.get('/products', (req, res) => {
  const products = []
  const {size} = req.query
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
// Error común en donde dos rutas pueden chocar
// Todo endpoint específico debe ir antes del endpoint dinámico.
app.get('/products/filter',(req,res)=>{
  res.send('Yo soy un filter')
})
// Endpoint Dinámico
app.get('/products/:id', (req, res) => {
  const { id } = req.params
  res.json({
    id,
    title: 'Red apple imported',
    price: '8'
  })
})


app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params
  res.json({
    categoryId,
    productId
  })
})

app.get('/users', (req, res) => {
  const { limit, offset } = req.query
  if (limit && offset) {
    res.json({
      limit,
      offset
    })
  } else {
    res.send('No hay parámetros')
  }
})

app.listen(port, () => {
  console.log(`My app listening on port ${port}`)
})
