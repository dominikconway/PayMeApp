const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({
    sender: {type: String, required: true},
    receiver: {type: String, required: true},
    amount: {type: Number, required: true},
    note: {type: String, required: true},
})

const Payment = mongoose.model('Payment', paymentSchema)

module.exports = Payment