const inscriptionService = require('../services/inscription')


const inscriptionResolvers ={
    Query:{
        getInscriptions: async(parent,args) =>{
            // lógica del proceso
            let inscriptions  = await userService.getInscriptions()
            return inscriptions
        },
        getInscriptionById: async (parent,args)=>{
            let inscription = await inscriptionService.getInscriptionById(args._id)
        }
    },
    Mutation:{
        createInscription: async (parent, args) => {
            let inscription = await inscriptionService.createInscription(args)
            return inscription
        },
        updateInscription: async (parent,args) =>{
            let inscription_update = inscriptionService.updateInscription(args._id,args)
            return inscription_update
        }
    }
}

module.exports = {
    inscriptionResolvers
}