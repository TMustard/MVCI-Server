const express = require('express')
const cors = require('cors')
const moves = require('./data/moves')
const app = express()

app.use(cors())

app.get('/', (req, res) => res.json(moves))

app.listen(process.env.PORT || 3000, () => console.log('listening'))
