const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello my first Express.js server')
})

app.listen(port, () => {
  console.log(`My app listening on port ${port}`)
})
