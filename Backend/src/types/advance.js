const { gql } = require("apollo-server-express")

const advanceType = gql`
    scalar Date
    type Advance{
        _id: ID!
        date: Date
        description: String
        observation: String
        creators: ID
        projects:ID
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
        inscriptions: [Inscription]
        advances:[Advance]
    }
    type Query{
        getAdvances:[Advance]
        getAdvanceById(_id:String):Advance
    }

    type Mutation{
        createAdvance(
            date: Date
            description: String
            observation: String
            creators: ID
            projects:ID
        ): Advance
        updateAdvance(
            _id: ID!
            date: Date
            description: String
            observation: String
        ):Advance
         deleteAdvance(
            _id: ID!
        ):Advance
    }

`;
module.exports = { advanceType }


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