const BodyParser = require('body-parser')

//expecting a json type application

module.exports = (app) => {
    app.use(BodyParser.json());
}