let util = require('util');

function Person(fname, lname) {
    this.fname = fname || 'John';
    this.lname = lname || 'Doe';
}

Person.prototype.greet = function() {
    console.log(`Hello ${ this.fname } ${ this.lname }!`);
}

function Police(fname, lname, id) {
    Person.call(this, fname, lname);
    this.id = id || '4477';
}

util.inherits(Police, Person);

let officerMance = new Police('Mance', 'Ryder', '2468')

officerMance.greet();

class People {
    constructor(name, initials) {
        this.name = name || 'Joe';
        this.initials = initials || 'G.I';
    }

    acknowledge() {

        console.log(`Hi ${this.name} ${this.initials}!`)
    }
}

class Army extends People {
    constructor(rank) {
        super();
        this.rank = rank || 'Sgt.';
    }
}

let joe = new Army;
joe.acknowledge();
let john = new People('JOHN', 'LENNON');
john.acknowledge();