function group(persons, key) {
    var result = [];
    for (var i = 0; i < persons.length; i++) {
        if (!result[persons[i][key]]) {
            result[persons[i][key]] = {value: []};
        }
        var valueResult = '[' + persons[i].firstname + ' ' + persons[i].lastname + ' (age ' + persons[i].age + ')]';
        result[persons[i][key]].value.push(valueResult);
    }

    var keyResult = Object.keys(result);
    for (var elements in keyResult) {
        console.log('Group ' + keyResult[elements] + ' : ' + result[keyResult[elements]].value);
    }
}

function Person(parameters) {
    var firstname = parameters.firstname;
    var lastname = parameters.lastname;
    var age = parameters.age;
    return {
        firstname: firstname,
        lastname: lastname,
        age: age
    }
}

var people = [];
people.push(new Person({firstname: "Scott", lastname: "Guthrie", age: 38}));
people.push(new Person({firstname: "Scott", lastname: "Johns", age: 36}));
people.push(new Person({firstname: "Scott", lastname: "Hanselman", age: 39}));
people.push(new Person({firstname: "Jesse", lastname: "Johns", age: 57}));
people.push(new Person({firstname: "Jon", lastname: "Skeet", age: 38}));

group(people, 'firstname');
group(people, 'lastname');
group(people, 'age');