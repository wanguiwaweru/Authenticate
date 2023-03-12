require('dotenv').config()
const registerRouter = require('./routes/register')
const express = require('express')
const mongoose = require('mongoose')
const db = mongoose.connection
const PORT = process.env.PORT || 5010
const app = express()

app.use(express.json())
app.use('/api', registerRouter)

mongoose.connect(process.env.DATABASE_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
mongoose.set('strictQuery', true)

db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))
app.listen(PORT, () => console.log(`Server Started on port ${PORT}`))