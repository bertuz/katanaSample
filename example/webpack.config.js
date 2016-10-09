var path = require('path');
var config = require(__dirname + '/../src/webpack.config');

config.context = path.join(__dirname);
config.entry = ['./index'];
config.output = {filename: './demo.js'};

module.exports = config;
