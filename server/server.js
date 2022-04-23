const express = require('express')
const dotenv = require('dotenv')
const helmet = require('helmet')

const app = express()
dotenv.config()
app.use('helmet')

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})