const express = require('express')

// Controllers
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

routes.get('/', (request, response) => {
  return response.json({
    evento: 'Semana OmniStack 11',
    aluno: 'Patrick Barbosa'
  })
})

// Ongs
routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

// Incidents
routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

// Profile 
routes.get('/profile', ProfileController.index)

// Session
routes.post('/sessions', SessionController.create)

module.exports = routes