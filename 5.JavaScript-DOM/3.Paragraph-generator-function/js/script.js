function createParagraph(id, text){
    var parent = document.getElementById(id);
    var para = document.createElement('p');
    var t = document.createTextNode(text);
    para.appendChild(t);
    parent.appendChild(para);
}
createParagraph('wrapper', 'Some text');
