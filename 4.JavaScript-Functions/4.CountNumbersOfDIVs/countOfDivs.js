function countDivs(html){
    var pattern = new RegExp('<div', 'ig');
    console.log(html.match(pattern).length);
}
var input =
    '<!DOCTYPE html>' +
    '<html>' +
    '<head lang="en">' +
        '<meta charset="UTF-8">' +
        '<title>index</title>' +
        '<script src="/yourScript.js" defer></script>' +
    '</head>' +
    '<body>' +
        '<div id="outerDiv">' +
            '<div' +
        'class="first">' +
                '<div><div>hello</div></div>' +
            '</div>' +
            '<div>hi<div></div></div>' +
            '<div>I am a div</div>' +
        '</div>' +
    '</body>' +
    '</html>';

countDivs(input);