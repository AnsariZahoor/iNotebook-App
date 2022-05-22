const connectToMongo = require('./db');
const express = require('express')

connectToMongo();

const app = express()
const port = 5000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('hello world')
  })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})