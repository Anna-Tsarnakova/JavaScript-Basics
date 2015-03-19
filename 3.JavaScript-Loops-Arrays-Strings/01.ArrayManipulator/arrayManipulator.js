function arrayManipulator(array){
    var numbers = array.filter(function(elements) {
        return !isNaN(elements);
    });

    numbers.sort(function(a, b){
        return b - a;
    });

    var frequency = {}; // array of frequency
    var max = 0;  // holds the max frequency
    var mostFrequent; // holds the most frequency element
    for(var v in numbers) {
        frequency[numbers[v]]=(frequency[numbers[v]] || 0) + 1; // increment frequency
        if(frequency[numbers[v]] > max) { // is this frequency > max
            max = frequency[numbers[v]]; // update max
            mostFrequent = numbers[v];  // update the result
        }
    }

    console.log('Min number: ' + numbers[numbers.length - 1] + '\nMax number: ' + numbers[0]);
    console.log('Most frequent number: ' + mostFrequent);
    console.log(numbers);
}
arrayManipulator(["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", { bunniesCount : 10}, [10, 20, 30, 40]]);