var dataFromJson = require('./greetings.json');

var greet = function() {
    console.log(dataFromJson.en);
}

module.exports = greet;