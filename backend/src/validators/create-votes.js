const { validateAll } = require('indicative/validator')

module.exports = async (request, response, next) => {
    try {
        await validateAll(request.body, { //validating data from the request and 

            /*validation rules that need to be run*/
            choice: 'required' //only require the choice that the user selected
        }) 

        return next() //go ahead to the request handler
    } catch (errors) {
        return response.status(422).json(errors) //unprocessable entity
    }
}