const express = require('express')
const cors = require('cors')
const chars = require('./data/chars')
const app = express()
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => res.json(chars))

app.listen(process.env.PORT || 3000, () => console.log('listening'))
