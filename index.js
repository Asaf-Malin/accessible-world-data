#!/usr/bin/env nodejs
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const indexRouter = require("./router.js");
app.use(cors());

app.use(bodyParser.json({limit: '50mb'}));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/api", indexRouter);

app.listen(3002, () => console.log("Server is running on port 3002"));
