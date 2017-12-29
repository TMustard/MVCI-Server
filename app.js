const express = require('express')
const moves = require('./data/moves')
const app = express()

app.get('/', (req, res) => res.json(moves))

app.listen(process.env.PORT || 3000, () => console.log('listening'))
