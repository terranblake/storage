"use strict";
exports.__esModule = true;
var Redis = require('ioredis');
var url = String(process.env.REDIS);
var redis = new Redis(url);
exports["default"] = redis;
