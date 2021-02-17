const Router = require('express').Router

const getPoll = require('../handlers/get-poll')

const createPolls = require('../handlers/create-polls')

const createVotes = require('../handlers/create-votes')

const createPollsValidator = require('../validators/create-polls')

const createVotesValidator = require('../validators/create-votes')

module.exports = (app, db, redisDb) => { //recieves app, db, redisDb instance data

    const router = new Router()

    router.post('/polls', createPollsValidator, createPolls(db)) 
    //createPollsValidator middleware runs first following the order of execution
    //passing db instance to the createPolls handler

    //to include the new route to the polls section
    router.put('/polls/:poll', createVotesValidator, createVotes(db, redisDb))

    //just to get the poll status
    router.get('/polls/:poll', getPoll(db))
    app.use(router)

}