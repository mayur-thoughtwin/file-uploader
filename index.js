const express = require("express");
const { router } = require("./router/route");
const { main } = require("./db");
var cors = require('cors')

require("dotenv").config();
const app = express();

app.use(cors())

app.use(express.json()); 
app.use("/", router);



app.listen(3001, main);
