require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const paymentsController = require('./controllers/payments.js')
const app = express()
const PORT = process.env.PORT || '3000'

// middleware
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use('/public', express.static('public'))

app.use('/payments', paymentsController)

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

    const db = mongoose.connection
    db.on('error', (err) => console.log(err.message + 'is mongo not running?'))
    db.on("connected", () => console.log("mongo connected"))
    db.on("disconnected", () => console.log("mongo disconnected"))

    app.listen(PORT, () => console.log(`server is listening on port: ${PORT}`))