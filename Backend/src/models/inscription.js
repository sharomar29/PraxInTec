const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('./user')
const Project = require('./project')


const InscriptionSchema = new  Schema({
    state: {
        type: String,
        enum : ['aceptado','rechazado'],
        default: 'aceptado'
    },
    admissionDate: {
        type: String
    },
    dischageDate: {
        type: String
    },
    students: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    projects: [{
        type: Schema.Types.ObjectId,
        ref: "Project"
    }]
})

module.exports = mongoose.model("Inscription", InscriptionSchema)