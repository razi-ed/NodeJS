var name = 'helen';

(function(last) {
    var name = 'Heidi'; //IIFE + declare variable inside
    console.log(name + ' ' + last)
}('hart'));

console.log(name);