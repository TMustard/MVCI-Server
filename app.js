const express = require('express')
const cors = require('cors')
const data = require('./data')
const app = express()
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => res.json(moves))

app.listen(process.env.PORT || 3000, () => console.log('listening'))
