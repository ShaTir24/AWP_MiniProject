const Kaizen = require('../models/kaizen')

//showing the internship details in tabular form
const index = (req, res, next) => {
 Kaizen.find()  //returns all employees
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: "An error Occurred!"
        })
    })
}

//showing single internship
const show = (req, res, next) => {
    let kaizenID = req.body.leaderEnroll;
    Internship.findById(kaizenID)
    .then(response => [
        res.json({
            response
        })
    ])
    .catch(error => {
        res.json({
            message: "An error Occurred!"
        })
    })
}

//add and deploy internships to the database
const store = (req, res, next) => {
    let kaizen = new Kaizen({
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
    kaizen.save()
        .then(response => {
            res.json({
                message: "Kaizen Project Details Added Successfully"
            })
        })
        .catch(error => {
            res.json({
                message: "An error occurred while saving the Kaizen project details"+error
            })
        })
}

//update an internship by internship id
const update = (req, res, next) => {
    let enrollment = req.body.leaderEnroll

    let updatedData = {
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
    }


    Kaizen.findByIdAndUpdate(enrollment, {$set: updatedData})
        .then(() => {
            res.json({
                message: "Kaizen project details updated successfully"
            })
        })
        .catch(error => {
            res.json({
                message: "An error occurred while updating Kaizen project"
            })
        })
}

//delete an internship details
const destroy = (req, res, next) => {
    let enrollment = req.body.leaderEnroll
    Kaizen.findOneAndRemove(enrollment)
        .then(() => {
            res.json({
                message: "Internship deleted successfully"
            })
        })
        .catch(error => {
            res.json({
                message: "Error Occurred while deleting the internship"
            })
        })
}

module.exports = {
    index,
    show,
    store,
    update,
    destroy
}