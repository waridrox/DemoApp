const Router = require('express').Router

const createPolls = require('../handlers/create-polls')

const createPollsValidator = require('../validators/create-polls')

module.exports = (app, client) => { //recieve both the app and client data

    const router = new Router()

    router.post('/polls', createPollsValidator, createPolls(client)) 
    //createPollsValidator middleware runs first following the order of execution
    //passing client to the createPolls handler

    app.use(router)

}