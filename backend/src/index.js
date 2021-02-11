const Express = require('express')
const setupRouter = require('./setup/router')
const setupDatabase = require('./setup/database')
const setupMiddleware = require('./setup/middleware')

const app = Express()

setupMiddleware(app)

setupDatabase()//returns a promise
.then((client) => {

    setupRouter(app, client) //calling the func inside the setupdatabase since we cannot access client data directly
    
    // console.log(client)

    app.listen(4000, () => {
        console.log('Server is running on port 4000');
    }) 
})
.catch(console.error)