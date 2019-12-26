"use strict";
exports.__esModule = true;
require('dotenv').config();
var fs_1 = require("fs");
exports.open = function (sources) {
    for (var _i = 0, sources_1 = sources; _i < sources_1.length; _i++) {
        var source = sources_1[_i];
        var sourcePath = process.cwd() + "/src/" + source + ".js";
        if (!fs_1.existsSync(sourcePath)) {
            console.error("no implementation exists for source " + source);
            continue;
        }
        if (!process.env[source.toUpperCase()]) {
            console.error("no credentials exists for source " + source);
            continue;
        }
        require(sourcePath);
    }
};
