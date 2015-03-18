function calcExpression(){
    var calculate = eval(document.getElementById('expression').value);
    if(calculate !== undefined){
        document.getElementById('result').innerHTML = calculate;
    } else{
        document.getElementById('result').innerHTML = 'Please, enter an expression';
    }
}
function reset(){
    document.getElementById('expression').value = '';
    document.getElementById('result').innerHTML = '';
}