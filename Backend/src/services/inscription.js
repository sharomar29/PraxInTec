const Inscription = require('../models/inscription')
const userService = require("./user")

createInscription = async (inscription) => {
    let inscriptionInstance = new Project(project)
    created_inscription = await inscriptionInstance.save()
    await inscriptionService.UpdateInscription(inscription['students'], created_inscription['_id'])
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
    newInscription = await InscriptionfindByIdAndUpdate(inscriptionId, inscription, { new: true })
    return newInscription
}

module.exports = {
    createInscription,
    getInscriptions,
    getInscriptionById,
    updateInscription
}