// showing eventEmitter

// user-defined eventEmitter
let Emitter = require('./emitter.js')

// lib eventEmitter
let libuvEmitter = require('events')
let event = require('./config.js').events

let emtr = new Emitter(); // user-defined eventEmitter
let intEmtr = new libuvEmitter() // lib eventEmitter
    // let event = eventConfig.events

// user-defined eventEmitter
emtr.on(event.GREET, () => {
    console.log('hi!')
})
emtr.on(event.GREET, () => {
    console.log('hello!')
})

emtr.emit(event.GREET)

// lib eventEmitter
intEmtr.on(event.SHOWMSG, () => {
    console.log('Displaying via libuv!!')
})
intEmtr.on(event.SHOWMSG, () => {
    console.log('Again Displaying via libuv!!')
})

intEmtr.emit(event.SHOWMSG)
