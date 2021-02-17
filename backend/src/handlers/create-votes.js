const { promisify } = require('util')
// const { v4 } = require ('uuid')

module.exports = (db, redisDb) => { //this function is going to handle the requests

    const saddAsync = promisify(redisDb.sadd).bind(redisDb)
/* So we are interested in a method called sadd from redisDb
So we are creating an async version from the callback function from promisify method from the util library
Now we can call the async function

*/

//getting all the members from the redis database
    const sisMembersAsync = promisify(redisDb.sismember).bind(redisDb)
//s is member is going to check if the user is already a member of that db

 

    return async (request, response) => {

        //we need to check if the user is a member before updating the db
        const isMember = await sisMembersAsync(request.params.poll, request.body.ip)

        if (sisMember) {
            return response.status(400).json({
                message: 'You have already voted for this poll!'
            })
        }

        console.log( 
            await smemebersAsync(request.params.poll) 
            //takes the key of the set whose members we want to view
        )

      const result = await db.collection('polls').updateOne({
            _id: request.params.poll, 
            'choices._id': request.body.choice
        }, 
        {
            $inc: {
                'choices.$.count': 1
            }
/*
Whatever choice was found in the 'choices._id' replace the $ sign with the index of the choice 
and then increase the count by 1 | only the specific choice is going to be incremented */
        })
        
        await saddAsync(request.params.poll, request.body.ip)
        //array of poll with the users ip addresses like { poll_id: [192.168.0.1, ...] }
        // console.log(result)
        return response.json({
            message: 'Thanks for your vote!'
        })
    }
        
}