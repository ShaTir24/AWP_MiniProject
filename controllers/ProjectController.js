const Project = require('../models/project')

//showing the project details in tabular form
const index = (req, res, next) => {
 Project.find()  //returns all projects
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

//showing single Project
const show = (req, res, next) => {
    let ProjectID = req.body.leaderEnroll;
    Project.findById(ProjectID)
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

//add and deploy projects to the database
const store = (req, res, next) => {
    let project = new Project({
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
    project.save()
        .then(response => {
            res.json({
                message: "Project Details Added Successfully"
            })
        })
        .catch(error => {
            res.json({
                message: "An error occurred while saving the Project details"+error
            })
        })
}

//update a project by project id
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
        projectReport: req.body.projectReport
    }


    Project.findByIdAndUpdate(enrollment, {$set: updatedData})
        .then(() => {
            res.json({
                message: "Project details updated successfully"
            })
        })
        .catch(error => {
            res.json({
                message: "An error occurred while updating Project"
            })
        })
}

//delete a project details
const destroy = (req, res, next) => {
    let enrollment = req.body.leaderEnroll
    Project.findOneAndRemove(enrollment)
        .then(() => {
            res.json({
                message: "Project deleted successfully"
            })
        })
        .catch(error => {
            res.json({
                message: "Error Occurred while deleting the Project"
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