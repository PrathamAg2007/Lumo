require('dotenv').config
const express = require('express')
const app = express()
const test = require('./routes/test')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use('/', test)


const port = process.env.PORT || 3000;
app.listen(port, ()=>{console.log(`Server is listening on port ${port}...`)})