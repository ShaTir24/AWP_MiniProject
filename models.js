const mongoose = require('mongoose')
const InternshipSchema = new mongoose.Schema({
    enroll: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
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
});

const Internship = mongoose.model("Internship", InternshipSchema);
module.exports = Internship