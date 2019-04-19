const express = require('express'),
      app = express(),
      port = process.env.PORT || 8080,
      mongoose = require('mongoose'),
      config_db = require('./config/database');

mongoose.Promise = global.Promise;
mongoose.connect(config_db.uri, (err) => {
  if (err) console.log('No se pudo conectar a Mongo');
  else console.log('Conectado a Mongo: ' + config_db.db);
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(port, function () {
  console.log('Escuchando en el puerto ' + port + '!');
});
