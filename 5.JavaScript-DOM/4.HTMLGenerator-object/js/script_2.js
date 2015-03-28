function HTMLGenerator() {}
    HTMLGenerator.prototype.createParagraph = function createParagraph (id, text) {
        var parent = document.getElementById(id);
        var para = document.createElement('p');
        var t = document.createTextNode(text);
        para.appendChild(t);
        parent.appendChild(para);
    };
    HTMLGenerator.prototype.createDiv = function (id, divClass) {
        var parent = document.getElementById(id);
        var div = document.createElement('div');
        div.className = divClass;
        parent.appendChild(div);
    };
    HTMLGenerator.prototype.createLink = function (id, text, url) {
        var parent = document.getElementById(id);
        var a = document.createElement('a');
        a.innerHTML = text;
        a.href = url;
        parent.appendChild(a);
    };

var HTMLGen = new HTMLGenerator();
HTMLGen.createParagraph('wrapper', 'Soft Uni');
HTMLGen.createDiv('wrapper', 'section');
HTMLGen.createLink('book', 'C# basics book', 'http://www.introprogramming.info/');
