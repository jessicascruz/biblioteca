const express = require('express');
const connection = require('./database/connection');

const UsuariosController = require('./controllers/Usuariosontroller');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/session', SessionController.create);

routes.post('/usuario', UsuariosController.create);
routes.get('/usuarios', UsuariosController.index);


module.exports = routes;