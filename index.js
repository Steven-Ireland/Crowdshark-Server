var express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res) {
	res.end();
});

app.get('/browse', function(req, res) {
  res.end(JSON.stringify([{name: 'Golem Project', description: 'this is a description', funding: 0, color: '#A9D6F5', link: '1234'},
    {name: 'Golem Project2', description: 'this is a description description description description description description ', funding: 0, color: '#A9D6F5', link: '1234'},
    {name: 'Golem Project 3', description: 'this is a description', funding: 0, color: '#A9D6F5', link: '1234'},
  {name: 'Golem Project 4', description: 'this is a description', funding: 0, color: '#A9D6F5', link: '1234'},
{name: 'Golem Project5', description: 'this is a description', funding: 0, color: '#A9D6F5', link: '1234'},
{name: 'Golem Project6', description: 'this is a description', funding: 0, color: '#A9D6F5', link: '1234'}]));
});

var server = app.listen(8080, function() {
    console.log('Express is listening to http://localhost:8080');
});
