import express from 'express'
import cors from 'cors'

import routes from './routes'

const app = express()

app.use(express.json())
app.use(cors({ origin: '*' }))
app.use(routes)

const listenCallback = () => 
  console.log('🚀 Server is running! 🌎 http://0.0.0.0:3333/')

app.listen(Number(process.env.PORT) || 3333, '0.0.0.0', listenCallback)