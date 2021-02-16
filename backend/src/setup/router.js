const Router = require('express').Router

const createPolls = require('../handlers/create-polls')

const createPollsValidator = require('../validators/create-polls')

module.exports = (app, db) => { //recieve both the app and db instance data

    const router = new Router()

    router.post('/polls', createPollsValidator, createPolls(db)) 
    //createPollsValidator middleware runs first following the order of execution
    //passing db instance to the createPolls handler

    app.use(router)

}