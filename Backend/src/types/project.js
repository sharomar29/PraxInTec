const { gql } = require("apollo-server-express")

const projectType = gql`
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
        getProjects:[Project]
        getProjectById(_id:String):Project
    }

    type Mutation{
        createProject(
            name: String
            startDate: String
            endDate: String
            isActive: Boolean
            leader: ID
            phase: String
            budget: String
            objectives: ID
            inscriptions:ID
        ): Project
        updateProject(
            _id: ID!
            name: String
            startDate: String
            endDate: String
            isActive: Boolean
            phase: String
            budget: String
        ):Project
        deleteProject(
            _id: ID!
        ):Project
    }

`;
module.exports = { projectType }