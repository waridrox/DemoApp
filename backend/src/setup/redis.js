const redis = require('redis')

module.exports = () => {
    return redis.createClient()
        //we can pass the URL that the client can be connected but if nothing is specified
        //then it gets connected to the localhost
        
    // ({})
}