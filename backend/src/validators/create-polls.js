const { request, response } = require("express");

const { validateAll } = require('indicative/validator')

module.exports = async (request, response, next) => { //promise
    try {
        await validateAll(request.body, { //validating data from the request and 

            /*validation rules that need to be run*/
            title: 'required',               //cannot be undefined or of type empty string   
            choices: 'required|array|min:2', //setting the min poll options to be 2
            'choices.*': 'required|string'   //validating every element in the array (* is used to select all the elements in an array)
        }) 

        return next() //go ahead to the request handler
    } catch (errors) {
        return response.status(422).json(errors) //unprocessable entity
    }
}