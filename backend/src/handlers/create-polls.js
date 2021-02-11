const { request, response } = require("express")

module.exports = (client) => { //this function is going to handle the requests
    return(request, response) => {
    //as createPolls method should return a valid express handler 
    console.log(client);

    response.json({
        testing: 'success'
    })

    }
        
}