const Router = require('express').Router

const getPoll = require('../handlers/get-poll')

const createPolls = require('../handlers/create-polls')

const createVotes = require('../handlers/create-votes')

const createPollsValidator = require('../validators/create-polls')

const createVotesValidator = require('../validators/create-votes')

module.exports = (app, db) => { //recieve both the app and db instance data

    const router = new Router()

    router.post('/polls', createPollsValidator, createPolls(db)) 
    //createPollsValidator middleware runs first following the order of execution
    //passing db instance to the createPolls handler

    //to include the new route to the polls section
    router.put('/polls/:poll', createVotesValidator, createVotes(db)) //passing new route called poll

    //just to get the poll status
    router.get('/polls/:poll', getPoll(db))
    app.use(router)

}