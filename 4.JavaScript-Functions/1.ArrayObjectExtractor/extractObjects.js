function extractObjects(array){
    var resultArray = [];
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] === 'object' && !((array[i]) instanceof Array)) {
            resultArray.push(array[i])
        }
    }
    console.log(resultArray);
}
extractObjects([
    "Pesho",
    4,
    4.21,
    { name : 'Valyo', age : 16 },
    { type : 'fish', model : 'zlatna ribka' },
    [1,2,3],
    "Gosho",
    { name : 'Penka', height: 1.65}
]);