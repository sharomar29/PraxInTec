const objectiveService = require('../services/objective')


const objectiveResolvers ={
    Query:{
        getObjectives: async(parent,args) =>{
            // lógica del proceso
            let objectives  = await objectiveService.getObjectives()
            return objectives
        },
        getObjectiveById: async (parent,args)=>{
            let objective = await objectiveService.getObjectiveById(args._id)
        }
    },
    Mutation:{
        createObjective: async (parent, args) => {
            let objective = await objectiveService.createObjective(args)
            return objective
        },
        updateObjective: async (parent,args) =>{
            let objective_update = objectiveService.updateObjective(args._id,args)
            return objective_update
        }
    }
}

module.exports = {
    objectiveResolvers
}