const { Router } = require('express');

const routes = new Router();

const UserController = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');

//routes.get('/users', UserController.show);
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);



module.exports = routes;
