// Paso 7- Creá una referencia a la conexión desde el controlador.
var con = require('../conexion_bd');

// Paso 8- En el controlador, creá una función que devuelva toda la información de todas las canciones que hay en la bdd.
function mostrarCanciones(req, res) {
    var sql = 'select * from cancion';
    con.query(sql, function(error, resultado, field){
        if (error) {
            console.log('Hubo un error en la consulta', error.message);
            return res.status(404).send('Hubo un error en la consulta');
        }

        var response = {
            'canciones': resultado
        }

        res.send(JSON.stringify(response));
    });
}

module.exports = {
    mostrarCanciones: mostrarCanciones
}
