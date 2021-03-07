const { Router } = require('express');

const routes = new Router();

const VacinaController = require('./app/controllers/VacinaController')

routes.get('/vacinas', VacinaController.getAll);
routes.post('/vacinas', VacinaController.create);
routes.put('/vacinas/:id', VacinaController.update);
routes.get('/vacinas/:id', VacinaController.getByID);
routes.delete('/vacinas/:id', VacinaController.delete);

module.exports = routes