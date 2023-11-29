const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const database = require("./config/database.config");


const app = express();

database.connect();

//Logger para request
app.use(logger("dev"));

//Body Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Static routers
app.use(express.static(path.join(__dirname, "public")));


module.exports = app;