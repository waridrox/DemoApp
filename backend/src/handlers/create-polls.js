const { request, response } = require("express")

const { v4 } = require("uuid")

module.exports = (db) => { //this function is going to handle the requests
    return async (request, response) => {
    //as createPolls method should return a valid express handler 
    // console.log(client);

    const data = {
        _id: v4(), //id field for the poll

        title: request.body.title, 
        //we are not going to have an array of strings but we are going to have an array of objects.
        choices: request.body.choices.map(choice => ({
            name: choice, 
            count: 0, //beginning count of 0
            _id: v4()
        }))
    }


    await db.collection('polls').insertOne(data) //inserting new record into the 'polls' collection

    return response.json({
        message: 'Poll created successfully!',
        pollId: data._id
    })
    // response.json({
    //     testing: 'success'
    // })
    }
        
}