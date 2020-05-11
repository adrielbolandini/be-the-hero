const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/ongcontroller');
const IncidentController = require('./controllers/incidentcontroller');
const ProfileController = require('./controllers/profilecontroller');
const SessionController = require('./controllers/sessioncontroller');


routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;