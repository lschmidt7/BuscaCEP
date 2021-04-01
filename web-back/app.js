var express = require('express');
const bodyParser = require('body-parser')
var mongoose = require('mongoose');

var app = express();

const ViaCep = require('node-viacep').default;

global.fetch = require('node-fetch');


app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
  next();
});

// CONNECT DATABASE
mongoose.connect('mongodb://localhost/busca_cep', {useNewUrlParser: true, useUnifiedTopology: true});
const conn = mongoose.connection;

// PROCESS CEP
app.post('/cep', function(req,res){
  let cep = req.body.cep.replace('-','')
  console.log(cep)
  const viacep = new ViaCep({
    type: 'json'
  })
  viacep.zipCod.getZip(cep)
  .then(data => data.text())
  .then(data => res.send(data));
  
})

// SIGN IN USER
app.post('/login',function (req,res) {
  
})

// SIGN UP USER
app.post('/register', function (req,res) {
  let user = req.body.user
  console.log(user)
  conn.db.collection("users", function(err, collection){
    collection.insertOne(user, function (err, res_query) {
      if(res_query.result.ok == 1)
      {
        res.send({inserted: true})
      }
    })
  });
})


// SERVER LISTEN
app.listen(4000, function() {
  console.log('App de Exemplo escutando na porta 4000!');
});