function calculateKnots(km){
    var knots = km / 1.852;
    return knots.toFixed(2);
}
console.log(calculateKnots(20));
console.log(calculateKnots(112));
console.log(calculateKnots(400));

