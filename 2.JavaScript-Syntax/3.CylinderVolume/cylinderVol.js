function calcCylinderVol(arr) {
    var radius = parseInt(arr[0]);
    var height = parseInt(arr[1]);
    var cylinderVolume = Math.PI * Math.pow(radius, 2) * height;
    return cylinderVolume.toFixed(3);
}
console.log(calcCylinderVol([2, 4]));
console.log(calcCylinderVol([5, 8]));
console.log(calcCylinderVol([12, 3]));