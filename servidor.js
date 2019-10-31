var express = require('express');
var bodyParser = require('body-parser');
// paso 4 - creá una referencia al controlador que creaste en el paso anterior.
var cancionesControlador = require('./controladores/cancionesControlador');

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get('/canciones', cancionesControlador.mostrarCanciones);

var puerto = '8080';

app.listen(puerto, function() {
    console.log("Escuchando pedidos en el puerto " + puerto);
});