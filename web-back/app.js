var express = require('express');
const bodyParser = require('body-parser')
var mongoose = require('mongoose');
require("dotenv-safe").config();

const ViaCep = require('node-viacep').default;

var app = express();

const jwt = require('jsonwebtoken');

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


function verifyJWT(req, res, next){
  const token = req.body.token;
  console.log(token)
  if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, process.env.SECRET, function(err, decoded) {
    if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
    
    // se tudo estiver ok, salva no request para uso posterior
    req.userId = decoded.id;
    next();
  });
}


// PROCESS CEP
app.post('/cep', verifyJWT, (req,res,next) => {
  let cep = req.body.cep.replace('-','')
  const viacep = new ViaCep({
    type: 'json'
  })
  viacep.zipCod.getZip(cep)
  .then(data => data.text())
  .then(data => res.send(data));
  
})

// SIGN IN USER
app.post('/login',function (req,res) {
  let user = req.body.user
  let res_query = conn.collection("users").find({email: user.email, password: user.password}).toArray(function (err, result) {
    if(result.length == 1)
    {
      const id = result[0].id
      const token = jwt.sign({ id }, process.env.SECRET, {
        expiresIn: 10000 // expires in 5min
      });
      return res.json({ auth: true, token: token });
    }
  })
})

// SIGN OUT USER
app.post('/logout', function(req, res) {
  res.json({ auth: false, token: null });
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