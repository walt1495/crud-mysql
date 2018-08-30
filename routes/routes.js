const express = require('express');
const router = express.Router();
const PersonaController = require('../controllers/PersonaController');

router
    .get('/', PersonaController.getAll)
    .get('/agregar', PersonaController.insert)
    .post('/agregar', PersonaController.save)
    .get('/editar/:id', PersonaController.getOne)
    .put('/editar/:id', PersonaController.save)
    .delete('/eliminar/:id', PersonaController.delete)
    .use(PersonaController.error404);

module.exports = router;