const mongoose = require('mongoose')
const Schema = mongoose.Schema

const internshipSchema = Schema({
    enroll: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    male: {
        type: Boolean,
    },
    female: {
        type: Boolean
    },
    title: {
        type: String,
        required: true
    },
    start_date: {
        type: String,
        required: true
    },
    end_date: {
        type: String,
        required: true
    },
    offer_letter: {
        type: String,
        required: true
    },
    completion_certificate: {
        type: String,
        required: true
    },
    report: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Internship = mongoose.model("Internship", internshipSchema)
module.exports = Internship;