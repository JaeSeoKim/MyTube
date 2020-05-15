import './db'
import './models/Video'
import app from './app'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.SERVER_PORT || 4000

const handleListening = () =>
  console.log(`✅ Listening on: http://localhost:${PORT}`)

app.listen(PORT, handleListening)
