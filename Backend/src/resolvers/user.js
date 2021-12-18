const userService = require('../services/user')


const userResolvers ={
    Query:{
        getUsers: async(parent,args) =>{
            // lógica del proceso
            let users  = await userService.getUsers()
            return users
        },
        getUserById: async (parent,args)=>{
            let user = await userService.getUserById(args._id)
            return user
        }
    },
    Mutation:{
        createUser: async (parent, args) => {
            let user = await userService.createUser(args)
            return user
        },
        updateUser: async (parent,args) =>{
            let user_update = userService.updateUser(args._id,args)
            return user_update
        },
        loginUser: async (parent,args) => {
            let login_user = userService.loginUser(args.user, args.email)
            return login_user
        },
        deleteUser: async (parent, args) => {
            let user_delete = userService.deleteUser(args._id)
            return user_delete
        }
    }
}

module.exports = {
    userResolvers
}