const express = require('express')
const routerApi = require('./routes')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello my first Express.js server')
})

app.get('/home', (req, res) => {
  res.send('Hello, i am home page')
})

app.listen(port, () => {
  console.log(`My app listening on port ${port}`)
})

routerApi(app)
