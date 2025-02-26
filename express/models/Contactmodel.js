const mongoose = require('mongoose')

const Contactmodel = new mongoose.schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    phone: {
        type: String,
        unique: true,
        required: true
    }
})