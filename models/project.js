const mongoose = require("mongoose");
const ProjectSchema = mongoose.Schema({
    leaderName :{
        type : String,
        required : true
    },
    leaderEnroll :{
        type : Number,
        unique:true,
        required : true
    },
    leaderEmail : {
        type: String
    },
    leaderPhoneNo : {
        type : String
    },
    member1Name : {
        type : String
    },
    member1Enroll : {
        type : Number
    },
    member1Email : {
        type : String
    },
    member2Name: {
        type: String
    },
    member2Enroll: {
        type: Number
    },
    member2Email: {
        type: String
    },
    member3Name: {
        type: String
    },
    member3Enroll: {
        type: Number
    },
    member3Email: {
        type: String
    },
    member4Name: {
        type: String
    },
    member4Enroll: {
        type: Number
    },
    member4Email: {
        type: String
    },
    projectName : {
        type : String,
        required : true
    },
    projectAbstract : {
        type : String,
        required: true
    },
    projectReport : {
        type : String,
        required : true
    }

}, {timestamp: true});

const Project = new mongoose.model("Project", ProjectSchema);
module.exports = Project;