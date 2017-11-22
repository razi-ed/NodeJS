function Person(fname, lname) {
    this.fname = fname;
    this.lname = lname;
}


Person.prototype.greet = function() {
    console.log('Hi ' + this.fname + '!!');
}
let johny = new Person('Johny', 'Klohp');

johny.greet();

let kate = new Person('Katherine', 'Grey');
kate.greet();