const { gql } = require("apollo-server-express")

const objectiveType = gql`
    scalar Date
    type Objective{
        _id: ID!
        description: String
        objectiveType: String
        projects: ID
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
        inscriptions:[Inscription]
        advances:[Advance]
    }
    type Project{
        _id: ID!
         name: String
        startDate: String
        endDate: String
        isActive: Boolean
        leader: ID
        phase: String
        budget: String
        objectives: [Objective]
        inscriptions:[Inscription]
        advances:[Advance]
    }
    type Query{
        getObjectives:[Objective]
        getObjectiveById(_id:String):Objective
    }

    type Mutation{
        createObjective(
            description: String
             objectiveType: String
        ): Objective
        updateObjective(
            _id: ID!
            description: String
            objectiveType: String
            projects: ID
        ):Objective
        deleteObjective(
            _id: ID!
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