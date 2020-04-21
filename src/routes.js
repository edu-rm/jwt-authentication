const { Router } = require('express');

const routes = new Router();

const authMiddleware = require('./app/middlewares/AuthMiddleware');

const UserController = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');

//routes.get('/users', UserController.show);
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);



module.exports = routes;
