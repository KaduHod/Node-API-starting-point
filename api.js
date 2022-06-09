const express = require('express')
const app = express()
const apiRoutes = require('./src/routes/apiRoutes')


app.use(
    express.urlencoded({
      extended: true,
    })
)
app.use(express.json())
  
app.use('/', apiRoutes)

try {
  app.listen(9999, () => console.log('Server running at http://127.0.0.1:9999'))
} catch (error) {
  console.log(error)
}


