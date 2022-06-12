const db = require('../database/knex')
const {testConn} = require('../database/db')
class Controller {

    async index(req, res){
        res.send({message:'Hello World'})
    }

    async view(req, res){
        res.render('index')
    }

    async getClients(req, res){
        const clientes = await db('clients')

        return res.send(clientes)
    }

    async teste(req, res){
        await res.send(testConn())
    }
}

module.exports = new Controller();