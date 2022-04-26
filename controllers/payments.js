const Payment = require('../models/payment')
const express = require('express')
const paymentRouter = express.Router()
const paymentSeed = require('../models/paymentSeed')

//middleware
const bodyParser = require('body-parser')
paymentRouter.use(bodyParser.urlencoded({ extended: false}))
const methodOverride = require('method-override')
const res = require('express/lib/response')
paymentRouter.use(methodOverride('_method'))
paymentRouter.use('/public', express.static('public'))


paymentRouter.get('/seed', (req, res) => {
    Payment.deleteMany({}, (error, allPayments) => {
        Payment.create(paymentSeed, (error, data) => {
            res.redirect('/payments')
        })
    })
})
// index route
paymentRouter.get('/', (req, res) => {
    //[]grabs everything
    Payment.find({}, (err, allPayments) => {
        //console.log(allProducts)
        res.render('index.ejs', {payments: allPayments})
    })
})

// new payment route
paymentRouter.get('/new', (req, res) => {
    res.render('new.ejs')
})

// create a payment route
paymentRouter.post('/', (req, res) => {
    Payment.create(req.body, (err, createdPayment) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect('/payments')
        }
    })
})

// payment detail page
paymentRouter.get('/:id', (req, res) => {
    Payment.findById(req.params.id, (err, foundPayment) => {
        if(err){
            console.log(err)
        }
        res.render('show.ejs', {payment: foundPayment})
    })
})

paymentRouter.delete('/:id', (req, res) => {
    Payment.findByIdAndDelete(req.params.id, (err, deletedPayment) => {
        res.redirect('/payments')
    })
})

// edit a payment route
paymentRouter.get('/:id/edit', (req, res) => {
    Payment.findById(req.params.id, (err, payment) => {
        res.render('edit.ejs',{payment})
    })
})

paymentRouter.put('/:id', (req, res) => {
    Payment.findByIdAndUpdate(req.params.id, req.body, (err, updatedPayment) => {
        res.redirect(`/payments/${req.params.id}`)
    })
})


module.exports = paymentRouter