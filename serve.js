var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var app = express();

var port = process.env.PORT || 6050;

app.use(morgan('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/"));
app.listen(port);

app.use(function(req, res){
    res.sendFile(__dirname + "/index.html");
});

var consoleOutput = 'Serving app at http://localhost:' + port + '...';
console.log(consoleOutput);