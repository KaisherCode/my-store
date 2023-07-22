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
  res.json({
    id:1,
    title:'Green apple imported',
    price: '8'
  })
})

// Categories path
app.get('/categories', (req, res) => {
  res.json({
    id:1,
    name:'Fruits',
    image:'https://plazavea.vteximg.com.br/arquivos/ids/177281-1000-1000/manzana-the-garden-verde-1kg.jpg'
  })
})

app.listen(port, () => {
  console.log(`My app listening on port ${port}`)
})
