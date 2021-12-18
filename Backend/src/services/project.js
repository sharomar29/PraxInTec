const Project = require('../models/project')
const userService = require("./user")

createProject = async (project) => {
    let projectInstance = new Project(project)
    created_project = await projectInstance.save()
    await userService.UpdateProject(project['leader'], created_project['_id'])
    return created_project
}

getProjects = async () => {
    let projects = await Project.find({}).populate("objectives").populate("advances").populate("inscriptions")
    return projects
}

getProjectById = async (projectId) => {
    let project = await Project.findById(projectId).populate("objectives").populate("advances").populate("inscriptions")
    return project
}

updateProject = async (projectId, project) => {
    newProject = await Project.findByIdAndUpdate(projectId, project, { new: true })
    return newProject
}

deleteProject = async (projectId) => {
    let project = await Project.findByIdAndDelete(projectId)
    return project
}

UpdateObjective = async (projectId, objectiveId) => {
    let project = await Project.findByIdAndUpdate(projectId, {
        $push: {
            objectives: objectiveId
        }
    })
    return project
}

UpdateAdvanceProjects = async (projectId, advanceId) => {
    let project = await Project.findByIdAndUpdate(projectId, {
        $push: {
            advances: advanceId
        }
    })
    return project
}

UpdateInscription = async (projectId, inscriptionId) => {
    let project = await Project.findByIdAndUpdate(projectId, {
        $push: {
            inscriptions: inscriptionId
        }
    })
    return project
}


module.exports = {
    createProject,
    getProjects,
    getProjectById,
    updateProject,
    deleteProject,
    UpdateObjective,
    UpdateAdvanceProjects,
    UpdateInscription
}