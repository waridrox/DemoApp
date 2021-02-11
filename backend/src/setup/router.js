const Router = require('express').Router

const createPolls = require('../handlers/create-polls')

module.exports = (app, client) => { //recieve both the app and client data

    const router = new Router()

    router.post('/polls', createPolls(client)) //passing client to the createPolls handler

    app.use(router)

}