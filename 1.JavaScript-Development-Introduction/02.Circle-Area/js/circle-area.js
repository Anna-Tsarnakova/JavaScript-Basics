function calcCircleArea(r) {
    return Math.PI * (r * r);
}
document.getElementById("firstNum").innerHTML = calcCircleArea(7);
document.getElementById("secondNum").innerHTML = calcCircleArea(1.5);
document.getElementById("thirdNum").innerHTML = calcCircleArea(20);