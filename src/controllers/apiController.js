const axios = require('../apis/axios')


class apiController {

    index(req, res){
        res.send({message:'Hello World'})
    }
}

module.exports = new apiController();