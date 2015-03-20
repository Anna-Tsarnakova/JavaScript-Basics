function sortLetters(str, bool){
    console.log(str.split('').sort(function(a, b){
        if(bool === true){
            return a.toLowerCase().localeCompare(b.toLowerCase());;
        } else {
            return b.toLowerCase().localeCompare(a.toLowerCase());
        }
    }).join(''));
}

sortLetters('HelloWorld', true);
sortLetters('HelloWorld', false);
