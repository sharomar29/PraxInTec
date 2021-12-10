const {projectResolvers} = require('./project')
const {userResolvers} = require('./user')
const {advanceResolvers} = require('./advance')
const {inscriptionResolvers} = require('./inscription')
const {objectiveResolvers} = require('./objective')

const resolvers = [projectResolvers, userResolvers, advanceResolvers, inscriptionResolvers, objectiveResolvers]

module.exports = {resolvers}