const Mongodb = require('mongodb')

const uri = 'mongodb://localhost/voting-platform' //database that we want to connect to


module.exports = async () => {
    const client = new Mongodb.MongoClient(uri, {
        useUnifiedTopology: true
    })

    await client.connect() //This function is going to establish a connection and return a promise

    return client.db()//this db function returns an instance of db instead of client previouly
}
