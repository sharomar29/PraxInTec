const advanceService = require('../services/advance')


const advanceResolvers ={
    Query:{
        getAdvances: async(parent,args) =>{
            // lógica del proceso
            let advances  = await advanceService.getAdvances()
            return advances
        },
        getAdvanceById: async (parent,args)=>{
            let advance = await advanceService.getAdvanceById(args._id)
        }
    },
    Mutation:{
        createAdvance: async (parent, args) => {
            let advance = await advanceService.createAdvance(args)
            return advance
        },
        updateAdvance: async (parent,args) =>{
            let advance_update = advanceService.updateAdvance(args._id,args)
            return advance_update
        }
    }
}

module.exports = {
    advanceResolvers
}