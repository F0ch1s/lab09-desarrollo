// Solicitando paquete de MySQL
var mysql = require('mysql');

// Configurando parámetros de conexión (puede variar según instalación)
var conexion = mysql.createConnection({
  host: 'localhost',
  port: '3306', // El puerto puede variar; por defecto MySQL usa 3306
  database: 'musicdb', // Cambia 'musicdb' por el nombre de tu base de datos
  user: 'root', // Cambia 'root' por tu usuario de MySQL
  password: 'root' // Cambia 'root' por tu contraseña de MySQL
});

// Realizando conexión o verificando si sucedió un error
conexion.connect(function(err) {
  if (err) {
    console.log('Error de conexión: ' + err.stack);
    return;
  }
  console.log('Conectado al ID ' + conexion.threadId);
});

// Realizando consulta a la tabla 'albums'
conexion.query('SELECT * FROM albums', function (error, results) {
  if (error) throw error;
  // Mostrar los resultados en la consola
  results.forEach(element => {
    console.log(element);
  });
});

// Cerrando la conexión
conexion.end();
