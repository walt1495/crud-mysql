const mysql = require('mysql');
let options = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pruebas'
};

const cnn = mysql.createConnection(options);

cnn.connect((error) => {
    if (error) {
        console.log(`Error al Conectarse a la Base de Datos: ${error}`)
    } else {
        console.log('Conectado a la Base de Datos')
    }
});

module.exports = cnn;