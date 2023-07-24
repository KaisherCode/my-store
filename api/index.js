const express = require('express')
const routerApi = require('./routes')
const cors = require('cors')

const { logErrors, errorHantler,boomErrorHantler } = require('./middlewares/errorHandler')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

const whitelist = ['http://localhost:8080','http://localhost:5500']
const options={
  origin:(origin,callback)=>{
    if(whitelist.includes(origin) || !origin){
      callback(null,true)
    }else{
      callback( new Error('no permitido'))
    }
  }
}
app.use(cors(options))

app.get('/api', (req, res) => {
  res.send('Hello my first Express.js server')
})

app.get('/api/home', (req, res) => {
  res.send('Hello, i am home page')
})

routerApi(app)

app.use(logErrors)
app.use(boomErrorHantler)
app.use(errorHantler)

app.listen(port, () => {
  console.log(`My app listening on port ${port}`)
})


