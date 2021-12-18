const { gql } = require("apollo-server-express")

const inscriptionType = gql`
    scalar Date
    type Inscription{
        _id: ID!
        state: String
        admissionDate: String
        dischageDate: Date
        students: [User]
        projects:[Project]
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
        getInscriptions:[Inscription]
        getInscriptionById(_id:String):Inscription
    }

    type Mutation{
        createInscription(
            state: String
            admissionDate: String
            dischageDate: Date
            students: ID
            projects:ID
        ): Inscription
        updateInscription(
            _id: ID!
            state: String
            admissionDate: String
            dischageDate: Date
        ):Inscription
        deleteInscription(
            _id: ID!
        ):Inscription
    }

`;
module.exports = { inscriptionType }


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