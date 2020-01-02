"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var url = String(process.env.MONGODB);
mongoose.connect(url);
mongoose.connection.on('connected', function () { return console.log('mongodb connection established'); });
exports["default"] = mongoose.connection;
