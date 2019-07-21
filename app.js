import express from 'express'
import cors from 'cors'

// import files
import indexRoute from './routes'

const app = express()
app.use(cors())

app.use('/', indexRoute)

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})


app.listen(3000, () => {
  console.log('App listening on port http://localhost:3000')
})
