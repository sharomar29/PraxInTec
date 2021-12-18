const express = require('express')
const mongoose = require('mongoose')
const {ApolloServer} = require("apollo-server-express")
const {resolvers} = require('./resolvers')
const {types} = require('./types')


const SECRET = "abcde";
const app = express()
const server = new ApolloServer({
    typeDefs:types,
    resolvers:resolvers

})



mongoose.connect("mongodb+srv://root:root@cluster0.v5sqr.mongodb.net/test", async()=>{
    console.log("conexión a bd exitosa");
    app.listen(5010, async()=>{
        await server.start()
        server.applyMiddleware({app})
        console.log("Servidor inicializado en puerto 5010");
    })
    
})




/*


import { Route, Redirect } from 'react-router'

<Route exact path="/" render={() => (
  loggedIn ? (
    <Redirect to="/dashboard"/>
  ) : (
    <PublicHomePage/>
  )
)}/>





*/