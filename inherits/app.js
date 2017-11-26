// practising inherit + eventEmitter
// working of inherit along with EventEmitter

// clean code with 'class'

let eventEmitter = require('events');

// [eventEmitter + inherits] .inherits,.on,.emit
class createDataObj extends eventEmitter {
    constructor() {
        super();
        this.data = 'well...this is some data ';
    }

    show() {
        console.log(this.data);
        this.emit('show');
    }
}

let dataObj = new createDataObj;

dataObj.on('show', () => {
    console.log("Msg from 'on'!!!")
});

dataObj.show();


// ####################
// [eventEmitter + inherits] .inherits,.on,.emit
// with passed parameter or data

class ObjCrtr extends eventEmitter {
    constructor() {
        super(); //see 01call.js
        this.data = 'hello!';
    }

    showData(data) {
        console.log('from the Event fn, which shows passed data :: ' + data);
        this.emit('showData', data);
    }
}

let obj = new ObjCrtr;

obj.on('showData', (data) => {
    console.log('showing from EventHandler, :: ' + data);
});

obj.showData('Passed-Data');