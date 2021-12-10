const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('./user')
const Project = require('./project')
const Objective = require('./objective')


const ProjectSchema = new  Schema({
    name:{
        type: String
    },
    startDate: {
        type: String
    },
    endDate: {
        type: String
    },
    isActive: {
        type: Boolean
    },
    leader: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    phase: {
        type: String,
        enum: ['iniciado', 'desarrollado', 'terminado'],
        default: 'iniciado'
    },
    budget: {
        type: Number
    },
    objectives:{
        type: Schema.Types.ObjectId,
        ref: "Objective"
    }
})

module.exports = mongoose.model("Project", ProjectSchema)