const Inscription = require('../models/inscription')
const userService = require("./user")
const projectService = require("./project")

createInscription = async (inscription) => {
    let inscriptionInstance = new Inscription(inscription)
    created_inscription = await inscriptionInstance.save()
   await userService.updateInscriptionUsers(inscription['students'], created_inscription['_id'])
   await projectService.UpdateInscription(inscription['projects'], created_inscription['_id'])
    return created_inscription
}

getInscriptions = async () => {
    let inscriptions = await Inscription.find({})
    return inscriptions
}

getInscriptionById = async (inscriptionId) => {
    let inscription = await Inscription.findById(inscriptionId).exec()
    return inscription
}

updateInscription = async (inscriptionId, inscription) => {
    newInscription = await Inscription.findByIdAndUpdate(inscriptionId, inscription, { new: true })
    return newInscription
}

deleteInscription = async (inscriptionId) => {
    let inscription = await Inscription.findByIdAndDelete(inscriptionId)
    return inscription
}

module.exports = {
    createInscription,
    getInscriptions,
    getInscriptionById,
    updateInscription,
    deleteInscription
}