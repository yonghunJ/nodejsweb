var express = require('express');
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app =express();
var fs = require('fs');
app.locals.pretty = true;
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));



app.get(['/','/index'], function(req, res) {
  res.render('index');
});
app.get('/events', function(req, res){
 res.render('events');
});

app.get('/notice', function(req, res){
  res.render('notice');
});

app.get('/research', function(req, res){
 res.render('research');
});
app.get('/scholarship', function(req, res){
 res.render('scholarship');
});

app.get('/login', function(req, res){
 res.render('login');
});

app.get('/register', function(req, res){
 res.render('register');
});



app.get('/about', function(req, res){
 res.render('about');
});

app.get('/courses', function(req, res){
 res.render('courses');
});

app.get('/blog', function(req, res){
 res.render('blog');
});

// var server = http.createServer(app);
// server.listen(process.env.PORT, () => {})
app.listen(process.env.PORT,function(){
});
