function replaceATag(str){
    var regex = /<a(.*?)>(.*?)<\/a>/g;
    var replaceTags = str.replace(regex, '[URL$1]$2[/URL]');
    console.log(replaceTags);
}
replaceATag('<ul>\n <li>\n\t<a href=http://softuni.bg>SoftUni</a>\n </li>\n</ul>');