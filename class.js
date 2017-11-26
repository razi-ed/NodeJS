//working of class

'use strict';

class Person {
    //below part just initializes the object with corresponding value
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }

    //below part is being added to the prototype object of Person
    greet() {
        console.log(`Hello Mr. ${ this.fname } ${this.lname}!`);
    }
}

let john = new Person('John', 'Pastore');
john.greet();