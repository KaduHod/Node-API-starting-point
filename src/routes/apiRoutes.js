const express = require('express');
const router = express.Router();
const Controller = require('../controllers/Controller')

router.get('/', Controller.index)
router.get('/view', Controller.view)
router.get('/clients', Controller.getClients)
router.get('/teste-conexao-database', Controller.teste)

module.exports = router;