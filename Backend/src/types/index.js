const { projectType } = require('./project')
const { userType } = require('./user')
const { advanceType } = require('./advance')
const { objectiveType } = require('./objective')
const { inscriptionType} = require('./inscription')

const types = [projectType, userType, advanceType, objectiveType, inscriptionType]
module.exports = {
    types
}