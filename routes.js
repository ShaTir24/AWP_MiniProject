const express = require("express");
const internModel = require("./models");
const app = express()

app.post("/add_internship", async (req, res) => {
    const newInternship = new internModel({
        enroll: req.body.enroll,
        name: req.body.name,
        start_date: req.body.start_date,
        end_date: req.body.start_date,
        offer_letter: req.body.offer_letter,
        completion_certificate: req.body.completion_certificate,
        report: req.body.report
    })

    try {
        await newInternship.save()
        res.send(newInternship)
    } catch(err) {
        res.status(500).send(err)
    }
});

app.get("/internships", async (req, res) => {
    const internships = await internModel.find({});

    try {
        res.send(internships);
    } catch(err) {
        res.status(500).send(err);
    }
});

module.exports = app;