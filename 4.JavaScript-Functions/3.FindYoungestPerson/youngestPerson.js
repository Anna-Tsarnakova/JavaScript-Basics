function findYoungestPerson(people){
    var youngestPerson;
    var minAges = Number.MAX_VALUE;

    for (var person in people) {
        if (people[person].age < minAges && people[person].hasSmartphone) {
            youngestPerson = people[person].firstname + ' ' + people[person].lastname;
            minAges = people[person].age;
        }
    }
    console.log('The youngest person is %s', youngestPerson);
}
var people = [
    { firstname : 'George', lastname: 'Kolev', age: 32, hasSmartphone: false },
    { firstname : 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true },
    { firstname : 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true },
    { firstname : 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false }
];
findYoungestPerson(people);