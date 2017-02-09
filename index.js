var express = require('express');
var app = express();
var ipfs = require('ipfs-api')('/ip4/127.0.0.1/tcp/5001');

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

app.get('/img/:url', function(req, res) {
  ipfs.cat(req.params.url, function(err, file) {
    if (err) {
      res.end('404');
    } else {
      file.pipe(res);
      file.on('end', function() {
        res.end();
      });
    }
  });
});

app.post('/img', function(req, res) {
  // ipfs.util.addFromStream(req, function(err, r) {
  //   console.log(r);
  //   res.end(r[0].hash);
  // });

  var buf = new Buffer('');
  req.on('data', function(chunk) {
    buf = Buffer.concat([buf, chunk]);
  });
  req.on('end', function() {
    ipfs.add(buf, function(err, results) {
      res.end(results[0].hash);
    });
  });
});

var server = app.listen(3001, function() {
    console.log('Express is listening to http://localhost:3001');
});
