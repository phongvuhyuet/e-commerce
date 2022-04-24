import express from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import mongoose from 'mongoose'
import User from './models/User.js'

const app = express()
dotenv.config()
app.use(helmet())

const PORT = process.env.PORT || 5000
mongoose.connect(process.env.DATABASE_URI).then(() => {
  console.log('Connect to database successfully!')
}).catch((e) => {
  console.log(e)
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
