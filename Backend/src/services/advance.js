const Advance = require('../models/advance')
const userService = require("./user")
const projectService = require("./project")

createAdvance = async (advance) => {
    let AdvanceInstance = new Advance(advance)
    created_advance = await AdvanceInstance.save()
    await userService.UpdateAdvance(advance['creator'], created_advance['_id'])
    await projectService.UpdateAdvanceProjects(advance['projects'], created_advance['_id'])
    return created_advance
}

getAdvances = async () => {
    let advances = await Advance.find({})
    return advances
}

getAdvanceById = async (advanceId) => {
    let advance = await Advance.findById(advanceId).exec()
    return advance
}

updateAdvance = async (advanceId, advance) => {
    newAdvance = await Advance.findByIdAndUpdate(advanceId, advance, { new: true })
    return newAdvance
}

deleteAdvance = async (advanceId) => {
    let advance = await Advance.findByIdAndDelete(advanceId)
    return advance
}

module.exports = {
    createAdvance,
    getAdvances,
    getAdvanceById,
    updateAdvance,
    deleteAdvance
}