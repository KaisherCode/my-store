const express = require('express')
const routerApi = require('./routes')

const { logErrors, errorHantler } = require('./middlewares/errorHandler')

const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello my first Express.js server')
})

app.get('/home', (req, res) => {
  res.send('Hello, i am home page')
})

routerApi(app)

app.use(logErrors)
app.use(errorHantler)

app.listen(port, () => {
  console.log(`My app listening on port ${port}`)
})


