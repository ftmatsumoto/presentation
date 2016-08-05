var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.status(200).send('Hello World\n');
});

app.listen(port);

console.log('Server now listening on port ' + port);

module.exports = app;