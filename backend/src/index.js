const Express = require('express')
const setupDatabase = require('./setup/database')
const setupMiddleware = require('./setup/middleware')

const app = Express()

setupMiddleware(app)

setupDatabase()//returns a promise
.then((client) => {

    console.log(client)

    app.listen(4000, () => {
        console.log('Server is running on port 4000');
    }) 
})
.catch(console.error)