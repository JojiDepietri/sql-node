var mysql = require('mysql');
// paso 6- Completá el archivo conexion_bd.js con la información de tu base de datos.
var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'chuwiland',
    database: 'musica'
});

connection.connect();
 
connection.query('SELECT * FROM cancion', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});
 
connection.end();

module.exports = connection;