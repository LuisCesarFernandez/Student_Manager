const express = require("express");
const config = require("../config/config");
const student = require("./modules/student");
const morgan = require("morgan");

const app = express();

//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//config
app.set('port', config.app.port);

//routes
app.use('/api/student', student);

module.exports = app;
