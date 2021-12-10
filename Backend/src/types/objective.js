const { gql } = require("apollo-server-express")

const objectiveType = gql`
    scalar Date
    type Objective{
        _id: ID!
        description: String
        objectiveType: String
        projects: [Project]
    }
     type User{
        _id: ID!
         name: String
        lastName: String
        identification: String
        email: String!
        password: String!
        role: String
        state: String
        projects:[Project]
    }
    type Project{
        _id: ID!
        name: String
        startDate: String
        endDate: String
        isActive: Boolean
        leader: ID
    }
    type Query{
        getObjectives:[Objective]
        getObjectiveById(_id:String):Objective
    }

    type Mutation{
        createObjective(
            description: String
             objectiveType: String
             projects: ID
        ): Objective
        updateObjective(
            _id: ID!
            description: String
            objectiveType: String
            projects: ID
        ):Objective
    }

`;
module.exports = { objectiveType }


/*
var userSchema = new mongooseSchema({
   userType: {
        type: String,
        enum : ['user','admin'],
        default: 'user'
    },
})
----------------------------------------

enum Role {

 ADMIN = 'ADMIN',

 USER = 'USER'

}



{

  type: String,

  enum: Role,

  default: Role.USER,

}
------------------------------------------

scalar Date

*/