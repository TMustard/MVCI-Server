const express = require("express");
const cors = require("cors");
const moves = require("./data/moves");
const combos = require("./data/combos");
const app = express();
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

// app.get("/", (req, res) => res.json());
app.get("/moves", (req, res) => res.json(moves));
app.get("/combos", (req, res) => res.json(combos));

app.listen(process.env.PORT || 8000, () => console.log("listening"));
