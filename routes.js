const express = require("express");
const internModel = require("./models/Internship");
const kaizenModel = require("./models/kaizen")
const projectModel = require("./models/project")
const app = express()

//basic routes for internship
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


//basic toutes for kaizen project
app.post("/add_kaizen_project", async (req, res) => {
    const newKaizenProject = new kaizenModel({
        leaderName: req.body.leaderName,
        leaderEnroll: req.body.leaderEnroll,
        leaderEmail: req.body.leaderEmail,
        leaderPhoneNo: req.body.leaderPhoneNo,
        member1Name: req.body.member1Name,
        member1Enroll: req.body.member1Enroll,
        member1Email: req.body.member1Email,
        member2Name: req.body.member2Name,
        member2Enroll: req.body.member2Enroll,
        member2Email: req.body.member2Email,
        member3Name: req.body.member3Name,
        member3Enroll: req.body.member3Enroll,
        member3Email: req.body.member3Email,
        member4Name: req.body.member4Name,
        member4Enroll: req.body.member4Enroll,
        member4Email: req.body.member4Email,
        projectName: req.body.projectName,
        projectAbstract: req.body.projectAbstract,
        winner: req.body.winner,
        rank: req.body.rank,
        winnerCertificate: req.body.winnerCertificate,
        participationCertificate: req.body.participationCertificate,
        projectReport: req.body.projectReport
    })

    try {
        await newKaizenProject.save()
        res.send(newKaizenProject)
    } catch(err) {
        res.status(500).send(err)
    }
});

app.get("/kaizen_project", async (req, res) => {
    const kaizenProjects = await kaizenModel.find({});

    try {
        res.send(kaizenProjects);
    } catch(err) {
        res.status(500).send(err);
    }
});


//basic routes for projects
app.post("/add_project", async (req, res) => {
    const newProject = new projectModel({
        leaderName: req.body.leaderName,
        leaderEnroll: req.body.leaderEnroll,
        leaderEmail: req.body.leaderEmail,
        leaderPhoneNo: req.body.leaderPhoneNo,
        member1Name: req.body.member1Name,
        member1Enroll: req.body.member1Enroll,
        member1Email: req.body.member1Email,
        member2Name: req.body.member2Name,
        member2Enroll: req.body.member2Enroll,
        member2Email: req.body.member2Email,
        member3Name: req.body.member3Name,
        member3Enroll: req.body.member3Enroll,
        member3Email: req.body.member3Email,
        member4Name: req.body.member4Name,
        member4Enroll: req.body.member4Enroll,
        member4Email: req.body.member4Email,
        projectName: req.body.projectName,
        projectAbstract: req.body.projectAbstract,
        projectReport: req.body.projectReport
    })

    try {
        await newProject.save()
        res.send(newProject)
    } catch(err) {
        res.status(500).send(err)
    }
});

app.get("/project", async (req, res) => {
    const projects = await projectModel.find({});

    try {
        res.send(projects);
    } catch(err) {
        res.status(500).send(err);
    }
});

module.exports = app;