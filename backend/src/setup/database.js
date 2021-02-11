const Mongodb = require('mongodb')

const uri = 'mongodb://localhost/voting-platform' //database that we want to connect to


module.exports = () => {
    const client = new Mongodb.MongoClient(uri, {
        useUnifiedTopology: true
    })

    return client.connect() //This function is going to establish a connection and return a promise
}
