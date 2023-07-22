const express = require('express')
const app = express()
const port = 3000

// Path default
app.get('/', (req, res) => {
  res.send('Hello my first Express.js server')
})

// Path home
app.get('/home',(req,res)=>{
  res.send('Hello, i am home page')
})

// new path
app.get('/new-path', (req, res) => {
  res.send('Hi, i am a new route')
})

// Product path
app.get('/products', (req, res) => {
  res.json([
    {
      title:'Green apple imported',
      price: '9'
    },
    {
      title:'Red apple imported',
      price: '8'
    },
    {
      title:'Domestic apple',
      price: '9'
    }
  ])
})

app.get('/products/:id',(req,res)=>{
const {id}=req.params
  res.json({
    id,
    title:'Red apple imported',
    price: '8'
  })
})

app.get('/categories/:categoryId/products/:productId',(req,res)=>{
  const {categoryId,productId}=req.params
  res.json({
    categoryId,
    productId
  })
})

app.listen(port, () => {
  console.log(`My app listening on port ${port}`)
})
