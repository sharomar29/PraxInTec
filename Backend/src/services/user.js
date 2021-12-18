const User = require('../models/user')

createUser = async (user) => {
    let userInstance = new User(user)
    user = await userInstance.save()
    return user
}

getUsers = async () => {
    let user = await User.find({}).populate("projects").populate("inscriptions").populate("advances")
    return user
}

getUserById = async(userId) =>{
    let user = await User.findById(userId).populate("projects").populate("inscriptions").populate("advances")
    return user
}

updateUser = async (userId, user)=>{
    let new_user = User.findByIdAndUpdate(userId, user,{new:true})
    return new_user
}

deleteUser = async (userId) => {
    let user = await User.findByIdAndDelete(userId)
    return user
}

loginUser = async (email, password) => {
    let user = await User.findOne({email: email, password: password})
    return user
}

UpdateProject = async(userId, projectId)=>{
    let user = await User.findByIdAndUpdate(userId,{
        $push:{
            projects:projectId
        }
    })
    return user
}

UpdateAdvance = async (userId, advanceId) => {
    let user = await User.findByIdAndUpdate(userId, {
        $push: {
            advances: advanceId
        }
    })
    return user
}

updateInscriptionUsers = async (userId, inscriptionId) => {
    let user = await User.findByIdAndUpdate(userId, {
        $push: {
            inscriptions: inscriptionId
        }
    })
    return user
}

/*getUsers = async () => {
    let user = await User.find({}).populate("projects")
    return user
}*/

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    loginUser,
    UpdateProject,
    UpdateAdvance,
    updateInscriptionUsers
}