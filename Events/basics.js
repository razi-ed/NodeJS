let obj = {
    property1: "PROPERTY 1"
}

let key = 'property1';

console.log(obj[key]);

let funcList = [];

funcList.push(function() {
    console.log('function 1');
})

funcList.push(function() {
    console.log('function 2');
})

funcList.push(function() {
    console.log('function 3');
})

funcList.forEach(e => e())