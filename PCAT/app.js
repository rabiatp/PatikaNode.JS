const express = require('express')
const app = express()
const path = require('path')
const port = 3000

const myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
  }

app.use(express.static('public'))  
app.use(myLogger)

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'temp/index.html'))
})

app.listen(port, () => {
    console.log(`Sunucu ${port} bağlantı kuruldu`)
})