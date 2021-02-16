const { v4 } = require("uuid")

module.exports = (db) => { //this function is going to handle the requests
    return async (request, response) => {
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

        // console.log(result)
        return response.json({
            message: 'Thanks for your vote!'
        })
    }
        
}