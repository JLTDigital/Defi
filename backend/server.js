import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import cors from 'cors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import { database } from './db/database.js'
import dappsRoutes from './routes/dappsRoutes.js'
import developerRoutes from './routes/developerRoutes.js'
import exchangesRoutes from './routes/exchangesRoutes.js'
import linksRoutes from './routes/linksRoutes.js'
import literatureRoutes from './routes/literatureRoutes.js'
import walletRoutes from './routes/walletRoutes.js'

dotenv.config()

database()

const app = express()

app.use(cors())

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

app.use('/api/defi', dappsRoutes)
app.use('/api', developerRoutes)
app.use('/api', exchangesRoutes)
app.use('/api', linksRoutes)
app.use('/api', literatureRoutes)
app.use('/api', walletRoutes)

const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('/*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
  )
} else {
  app.get('/api', (req, res) => {
    res.send('API is active...')
  })
}
app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 4000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} at port ${PORT}`.blue.bold
  )
)
