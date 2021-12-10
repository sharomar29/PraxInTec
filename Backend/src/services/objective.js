const Objective = require('../models/objective')
const projectService = require("./project")

createObjective = async (objective) => {
    let ObjectiveInstance = new Objective(objective)
    created_objective = await AdvanceInstance.save()
    await projectService.UpdateAdvance(objective['projects'], created_objective['_id'])
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

module.exports = {
    createObjective,
    getObjectives,
    getObjectiveById,
    updateObjective
}