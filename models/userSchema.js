const mongoose = require('mongoose')
const schema = mongoose.Schema

const User = new schema ({
    college: {
        type: String,
        required: true,
    },
    job: {
        type: String,
        required: true,
    },
    home: {
        type: String,
        required: true,
    },
},{timestamps: true})

module.exports = mongoose.model('UserModel', User);