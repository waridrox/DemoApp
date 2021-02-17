const Express = require('express')
const setupRedis = require('./setup/redis')
const setupRouter = require('./setup/router')
const setupDatabase = require('./setup/database')
const setupMiddleware = require('./setup/middleware')

const app = Express()

setupMiddleware(app)

async function start() {
    const db = await setupDatabase() //resolves with a db instance //mongodb instance
    const redisDb = await setupRedis()//redis db instance

    setupRouter(app, db, redisDb) //passing the db instance and the redisDb instance
    
    // console.log(client)

    app.listen(4000, () => {
        console.log('Server is running on port 4000');
    }) 
}


start()
.catch(console.error)