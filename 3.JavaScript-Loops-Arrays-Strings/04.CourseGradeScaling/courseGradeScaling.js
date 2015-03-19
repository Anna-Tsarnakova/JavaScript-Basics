function courseGradeScaling(obj){
    obj.map(function increasingScore(element){
        element.score += element.score * 0.1;
        element.hasPassed = element.score >= 100;
        return element;
    });
    obj.filter(function hasPassedExam(element){
        if (element.hasPassed === true) {
            return element;
        }
    });
    obj.sort(function sortedPerson(first, second){
        return first.name > second.name;
    });
    var str = JSON.stringify(obj);
    console.log(str);
}
courseGradeScaling(
    [
        {
            'name' : 'Пешо',
            'score' : 91
        },
        {
            'name' : 'Лилия',
            'score' : 290
        },
        {
            'name' : 'Алекс',
            'score' : 343
        },
        {
            'name' : 'Габриела',
            'score' : 400
        },
        {
            'name' : 'Жичка',
            'score' : 70
        }
    ]
);