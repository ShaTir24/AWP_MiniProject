const Internship = require('../models/Internship')

//showing the internship details in tabular form
const index = (req, res, next) => {
 Internship.find()  //returns all employees
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
    let enrollment = req.body;
    Internship.findOne(enrollment)
    .then(response => [
        res.json({
            response
        })
    ])
    .catch(error => {
        res.json({
            message: "An error Occurred!"+error
        })
    })
}

//add and deploy internships to the database
const store = (req, res, next) => {
    let internship = new Internship({
        enroll: req.body.enroll,
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        male: req.body.male,
        female: req.body.female,
        title: req.body.title,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        offer_letter: req.body.offer_letter,
        completion_certificate: req.body.completion_certificate,
        report: req.body.report
    })
    internship.save()
        .then(response => {
            res.json({
                message: "Internship Details Added Successfully"
            })
        })
        .catch(error => {
            res.json({
                message: "An error occurred while saving the internship details, "+error
            })
        })
}

//update an internship by internship id
const update = (req, res, next) => {
    let enrollmentNew = req.body

    let updatedData = {
        enroll: req.body.enroll,
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        male: req.body.male,
        female: req.body.female,
        title: req.body.title,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        offer_letter: req.body.offer_letter,
        completion_certificate: req.body.completion_certificate,
        report: req.body.report
    }


    Internship.findOneAndUpdate(enrollmentNew, {$set: updatedData})
        .then(() => {
            res.json({
                message: "Internship details updated successfully"
            })
        })
        .catch(error => {
            res.json({
                message: "An error occurred while updating internship"
            })
        })
}

//delete an internship details
const destroy = (req, res, next) => {
    let enrollment = req.body.enroll
    Internship.findOneAndRemove(enrollment)
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