// practising inherit + eventEmitter
// working of inherit along with EventEmitter

// clean code with 'class'
let createDataObj = require('./asset.js').createDataObj

let dataObj = new createDataObj

dataObj.on('show', () => {
    console.log("Msg from 'on'!!!")
})

dataObj.show()

// ####################
// [eventEmitter + inherits] .inherits,.on,.emit
// with passed parameter or data

let ObjCrtr = require('./asset.js').ObjCrtr;

let obj = new ObjCrtr

obj.on('showData', (data) => {
    console.log('showing from EventHandler, :: ' + data)
})

obj.showData('Passed-Data')