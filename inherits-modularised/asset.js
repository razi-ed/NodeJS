// clean code with 'class'

let eventEmitter = require('events')

// [eventEmitter + inherits] .inherits,.on,.emit
module.exports = {
    createDataObj: class createDataObj extends eventEmitter {
        constructor() {
            super()
            this.data = 'well...this is some data '
        }

        show() {
            console.log(this.data)
            this.emit('show')
        }
    },
    ObjCrtr: class ObjCrtr extends eventEmitter {
        constructor() {
            super(); // see 01call.js
            this.data = 'hello!'
        }

        showData(data) {
            console.log('from the Event fn, which shows passed data :: ' + data)
            this.emit('showData', data)
        }
    }
}