// importando paquete express
var express = require('express');

// creando objeto express
var app = express();

// creando el middleware
const middleware = function(req, res, next) {
    console.log('Ejecutando el middleware mientras llega la petición');
    next(); // pasa al siguiente middleware o ruta
};

// invocando el middleware
app.use(middleware);

// configurando manejador de rutas
app.get('/', function(req, res) {
    res.send('Llegó la petición al servidor');
});

// levantando servidor
app.listen(3000, function() {
    console.log('Servidor en escucha');
});
