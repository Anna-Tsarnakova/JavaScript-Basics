Array.prototype.removeItem = function(value) {
    for (var i = 0; i < this.length; i++) {
        if(this[i] === value) {
            this.splice(i, 1); //At position i, remove 1 item
        }
    }
};
var arrFirst = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
arrFirst.removeItem(1);
console.log(arrFirst);

var arrSecond = ['hi', 'bye', 'hello' ];
arrSecond.removeItem('bye');
console.log(arrSecond);