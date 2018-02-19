var express = require('express');
var app = express();
var port = 3000;

app.use(express.static('build'));
app.listen(port);
console.log('Listening on port ' + port);