var dataFromJSON = require('./greetings.json');

var greet = function() {
    console.log(dataFromJSON.es);
}

module.exports = greet;