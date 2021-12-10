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
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum : ['admin','user'],
        default : 'user'
    },
    estate: {
        type: String,
        enum : ['pendiente', 'autorizado', 'no autorizado'],
        default: 'pendiente'
    },
    projects:[{
        type: Schema.Types.ObjectId,
        ref: "Project"
    }]
})

module.exports = mongoose.model("User",UserSchema)