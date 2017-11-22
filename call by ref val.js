// pass by value
function change(b) {
    b = 'changed';
    console.log('Inside Fn :' + b);
}

var a = 'Initial';
change(a);
console.log('outside fn :' + a);

//pass by reference

function changeObj(o) {
    o.prop1 = function() {};
    o.meth1 = {};
}

var obj = {
    prop1: {},
    meth1: function() {}
}

changeObj(obj);
console.log(obj);