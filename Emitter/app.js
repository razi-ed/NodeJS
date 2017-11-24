let Emitter = require('./emitter.js');

let emtr = new Emitter();

emtr.on('greet', () => { console.log('hi!') });
emtr.on('greet', () => { console.log('hello!') });

emtr.emit('greet');