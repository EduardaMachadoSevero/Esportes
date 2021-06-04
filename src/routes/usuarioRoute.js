const express = require('express')

const routes = express.Router()
const upload = require('../config/multer')

const usuarioController = require('../controller/usuarioController')

routes.get('/',usuarioController.list)

routes.post('/',usuarioController.filtro)

routes.get('/add',usuarioController.abreadd)

routes.post('/add',upload.Single('foto'),usuarioController.add)

routes.get('/edit/:id',usuarioController.abreedit)

routes.post('/edit/:id',upload.Single('foto'),usuarioController.edit)

routes.get('/del/:id',usuarioController.del)

module.exports = routes;