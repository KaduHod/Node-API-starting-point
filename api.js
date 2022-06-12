const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

//middleware
app.use(bodyParser.json());
app.use(cors());
const apiRoutes = require('./src/routes/apiRoutes')


app.use('/', apiRoutes)



try {
  app.listen(9999, () => console.log('Running at http://127.0.0.1:9999'))
} catch (error) {
  console.log('Erro', error)
}
