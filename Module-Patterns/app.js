// Pattern 1
var req1 = require('./overridingPattern')
req1()

// Pattern 2
let req2 = require('./addingMethodPattern')
req2.showMsg()

// Pattern 3
let req2Better = require('./addingMethodPattern').showMsg
req2Better()

let req3 = require('./replaceWithConstructedObject')
req3.show()

// Pattern 4
let req4 = require('./passingObjectConstructor');
let req4Obj = new req4('export passied with Class or Object Constructor !!!');
req4Obj.show();

// Pattern 5 Revealing Module Pattern
let req5 = require('./revealingModulePattern');
req5.showMsg();