const Objective = require('../models/objective')
const projectService = require("./project")

createObjective = async (objective) => {
    let objectiveInstance = new Objective(objective)
    created_objective = await objectiveInstance.save()
    await projectService.UpdateObjective(objective['projects'], created_objective['_id'])
    return created_objective
}

getObjectives = async () => {
    let objectives = await Objective.find({})
    return objectives
}

getObjectiveById = async (objectiveId) => {
    let objective = await Objective.findById(objectiveId).exec()
    return objective
}

updateObjective = async (objectiveId, objective) => {
    newObjective = await Objective.findByIdAndUpdate(objectiveId, objective, { new: true })
    return newObjective
}

deleteObjective = async (objectiveId) => {
    let objective = await Objective.findByIdAndDelete(objectiveId)
    return objective
},

deleteObjective = async (objectiveId) => {
    let objective = await Objective.findByIdAndDelete(objectiveId)
    return objective
}

module.exports = {
    createObjective,
    getObjectives,
    getObjectiveById,
    updateObjective,
    deleteObjective
}