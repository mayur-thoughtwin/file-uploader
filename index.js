const express = require("express");
const { router } = require("./router/route");
const { main } = require("./db");

require("dotenv").config();
const app = express();

app.use(express.json()); 
app.use("/", router);



app.listen(3001, main);
