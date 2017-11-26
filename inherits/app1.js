//working of inherit along with EventEmitter
let EventEmitter = require('events');
let util = require('util');

// [eventEmitter + inherits] .inherits,.on,.emit
function Greetr() {
    this.greeting = 'Hello world!!!';
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function() {
    console.log(this.greeting);
    this.emit('greet');
}

let greeter1 = new Greetr();

greeter1.on('greet', () => {
    console.log('From eventEmitter!!');
})

greeter1.greet()

//################
// [eventEmitter + inherits] .inherits,.on,.emit
// with passed parameter or data
function greetWithData() {
    this.greetingsWithData = 'Greetings from : ';
}

util.inherits(greetWithData, EventEmitter);

greetWithData.prototype.greetAlongData = function(data) {
    console.log(this.greetingsWithData + data);
    this.emit('greetAlongData', data);
}

let greeterWithData = new greetWithData();

greeterWithData.on('greetAlongData', function(data) {
    console.log('Hello World By : ' + data + " from 'on'!!");
});

greeterWithData.greetAlongData('Rocket from GoG');