const http = require('http');
const port = process.env.PORT || 3000;
const express = require('express'); // Express web server framework
const cookieParser = require('cookie-parser'); // Express web server framework

var app = express();


app.use(express.static(__dirname + '/www'))
    .use(cookieParser());


app.listen(8080);

console.log("Visit http://localhost:8080 in your browser!");
