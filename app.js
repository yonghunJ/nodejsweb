var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app); app.get('/', function(req, res) {
  res.send('root page');
});

app.get('/start', function(req, res){
  res.send('start page');
});


server.listen(process.env.PORT, () => {})
