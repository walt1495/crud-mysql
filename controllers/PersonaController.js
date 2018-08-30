const PersonaModel = require('../models/PersonaModel');
const PersonaController = {
    getAll: (req, res, next) => {
        PersonaModel.getAll((error, personas) => {
            if (error) {
                console.log(`Error al SELECCIONAR PERSONA: ${error}`);
            } else {
                let data = {
                        title: 'Lista de Personas',
                        personas
                    }
                    // console.log(data.personas);
                res.render('index', data);
            }
        });
    },
    getOne: (req, res, next) => {
        PersonaModel.getOne(req.params.id, (error, persona) => {
            if (error) {
                console.log(`Error al Buscar persona, error: ${error}`);
                res.redirect('/');
            } else {
                if (persona.length <= 0) {
                    next();
                } else {
                    let mes = persona[0].fNacimiento.getMonth();
                    if (mes <= 9) mes = '0' + mes;

                    persona[0].mes = mes;
                    let data = {
                        title: 'Editar Persona',
                        persona
                    };
                    res.render('edit', data);
                }
            }
        });
    },
    insert: (req, res, next) => {
        let data = {
            title: 'Agregar Persona'
        };
        res.render('insert', data);
    },
    save: (req, res, next) => {
        let persona = {
            nombre: req.body.txtNombre,
            apellidos: req.body.txtApellidos,
            direccion: req.body.txtDireccion,
            fNacimiento: req.body.txtNacimiento,
            email: req.body.txtEmail
        };
        if (req.params.id) {
            persona.idPersona = req.params.id;
        }
        PersonaModel.save(persona, (error, result) => {
            if (error) {
                console.log(`Error al Salvar persona, error: ${error}`);
            }
            res.redirect('/');
        });

    },
    delete: (req, res, next) => {
        PersonaModel.delete(req.params.id, (error, result) => {
            if (error) console.log(`Hay un error al Eliminar persona, error ${error}`);
            res.redirect('/');
        });
        // res.end(req.params.id);
    },
    error404: (req, res, next) => {
        res.end('pagina no encontrada');
    }
};


module.exports = PersonaController;