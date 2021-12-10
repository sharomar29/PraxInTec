const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Project = require('./project')
const User = require('./user')

const ObjectiveSchema = new Schema({
    description: {
        type: String
    },
    ObjectiveType: {
        type: String,
        enum: ['general', 'especifico'],
        default: 'general'
    },
    projects: [{
        type: Schema.Types.ObjectId,
        ref: "Project"
    }]
})

module.exports = mongoose.model("Objective",ObjectiveSchema)