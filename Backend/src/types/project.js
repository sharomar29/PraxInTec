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
        ): Project
        updateProject(
            _id: ID!
             name: String
            startDate: String
            endDate: String
            isActive: Boolean
            leader: ID
        ):Project
    }

`;
module.exports = { projectType }