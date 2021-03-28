var express = require('express');
const cors = require('cors');

var app = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
    next();
  });

app.get('/', function(req, res) {
  res.send('Olá Mundo!');
});

app.get('/response', function (req,res) {
    res.send("resposta")
})

app.listen(4000, function() {
  console.log('App de Exemplo escutando na porta 4000!');
});