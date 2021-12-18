const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Project = require('./project')

const UserSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    lastName: {
        type: String
    },
    identification: {
        type: String
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum : ['administrador','estudiante','lider','usuario'],
        default : 'usuario'
    },
    estate: {
        type: String,
        enum : ['pendiente', 'autorizado', 'no autorizado'],
        default: 'pendiente'
    },
    projects:[{
        type: Schema.Types.ObjectId,
        ref: "Project"
    }],
    inscriptions:[{
        type: Schema.Types.ObjectId,
        ref: "Inscription"
    }],
    advances:[{
        type: Schema.Types.ObjectId,
        ref: "Advance"
    }]
})

module.exports = mongoose.model("User",UserSchema)