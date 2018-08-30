const cnn = require('./connection');
const PersonaModel = () => {};

PersonaModel.getAll = (callback) => {
    cnn.query('SELECT * FROM personas WHERE personas.estado=1 ORDER BY idPersona DESC', callback);
};
PersonaModel.getOne = (id, callback) => cnn.query('SELECT * FROM personas WHERE estado=1 and idPersona = ?', id, callback);
PersonaModel.insert = (persona, callback) => {
    cnn.query('INSERT INTO personas VALUES(null,?,?,?,?,?,1)', [persona.nombre, persona.apellidos, persona.direccion, persona.fNacimiento, persona.email], callback);
};
PersonaModel.update = (persona, callback) => {
    cnn.query('UPDATE personas SET nombre=?,apellidos=?,direccion=?,fNacimiento=?,email=? WHERE idPersona=?', [persona.nombre, persona.apellidos, persona.direccion, persona.fNacimiento, persona.email, persona.idPersona], callback);
};
PersonaModel.save = (persona, callback) => {
    if (persona.idPersona) {
        PersonaModel.update(persona, callback);
    } else {
        PersonaModel.insert(persona, callback);
    }

};
PersonaModel.delete = (id, callback) => cnn.query('UPDATE personas SET estado = 0 WHERE idPersona=?', id, callback);

module.exports = PersonaModel;