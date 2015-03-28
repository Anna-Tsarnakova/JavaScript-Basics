function checkEmail() {
    var input = document.getElementById('text-field').value;
    var output = document.getElementById('output');
    var regex = /^(([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,})$/g;
    if (regex.test(input)) {
        output.style.backgroundColor = '#90ee90';
    } else {
        output.style.backgroundColor = '#ff0000';
    }
    output.innerHTML = input;
}