function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function compareObjects(obj, objCopy) {
    return obj == objCopy;
}

var a = {name: 'Pesho', age: 21};

var b = clone(a); // a deep copy
console.log('a == b --> ' + compareObjects(a, b));

var b2 = a; // not a deep copy
console.log('a == b --> ' + compareObjects(a, b2));