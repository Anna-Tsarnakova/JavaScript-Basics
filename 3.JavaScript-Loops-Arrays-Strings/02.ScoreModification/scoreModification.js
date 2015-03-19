function scoreModification(array){
    var numbers = array.filter(function(elements) {
        return elements >= 0 && elements <= 400;
    }).map(function(elements) {
        return Math.round(elements * 80) / 100;
    }).sort(function(a, b){
            return a > b;
    });
    console.log(numbers);
}
scoreModification([200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1]);