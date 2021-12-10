const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Project = require('./project')
const User = require('./user')

const AdvanceSchema = new Schema({
    date: {
        type: Date,
        required: false
    },
    description: {
        type: String
    },
    observation: {
        type: String
    },
    creator:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    projects:{
        type: Schema.Types.ObjectId,
        ref: "Project"
    }
})

module.exports = mongoose.model("Advance",AdvanceSchema)