//endpoint to find the poll from the database
module.exports = (db) => { //this function is going to handle the requests
    return async (request, response) => {
      const poll = await db.collection('polls').findOne({
          _id: request.params.poll
      })

        return response.json(poll)
    }
}