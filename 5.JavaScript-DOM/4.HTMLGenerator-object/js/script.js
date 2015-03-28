var HTMLGenerator = {};
    HTMLGenerator.createParagraph = function createParagraph (id, text) {
        var parent = document.getElementById(id);
        var para = document.createElement('p');
        var t = document.createTextNode(text);
        para.appendChild(t);
        parent.appendChild(para);
    };
    HTMLGenerator.createDiv = function (id, divClass) {
        var parent = document.getElementById(id);
        var div = document.createElement('div');
        div.className = divClass;
        parent.appendChild(div);
    };
    HTMLGenerator.createLink = function (id, text, url) {
        var parent = document.getElementById(id);
        var a = document.createElement('a');
        a.innerHTML = text;
        a.href = url;
        parent.appendChild(a);
    };
//input
HTMLGenerator.createParagraph('wrapper', 'Soft Uni');
HTMLGenerator.createDiv('wrapper', 'section');
HTMLGenerator.createLink('book', 'C# basics book', 'http://www.introprogramming.info/');
