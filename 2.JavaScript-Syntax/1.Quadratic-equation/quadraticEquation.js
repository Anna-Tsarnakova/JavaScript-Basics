function quadraticEquation(a, b, c){
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    var d = Math.pow(b, 2) - 4 * a * c;
    var x1 = (-b + Math.sqrt(d)) / (2 * a);
    var x2 = (-b - Math.sqrt(d)) / (2 * a);

    if(d < 0){
        console.log('No real roots');
    }
    else{
        if(x1 !== x2){
            console.log('x1 = ' + x1 + '\nx2 = ' + x2);
        } else if( x1 === x2){
            console.log('x = ' + x1);
        }
    }
}
quadraticEquation(2, 5, -3);
quadraticEquation(2, -4, 2);
quadraticEquation(4, 2, 1);