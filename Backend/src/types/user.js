const { gql } = require("apollo-server-express")

const userType = gql`
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

    type Query {
        getUsers: [User]
        getUserById(_id:String): User
    }
    type Mutation {
        createUser(
            name: String
            lastName: String
            identification: String
            email: String!
            password: String!
            role: String
            state: String
        ): User
        updateUser(
            _id: ID!
            name: String
            lastName: String
            identification: String
            email: String!
            password: String!
            role: String
            state: String
        ): User
        deleteUser(
            _id: ID!
        ): User
        loginUser(
            email: String
            password: String
        ):User
    }
`;

module.exports = { userType }