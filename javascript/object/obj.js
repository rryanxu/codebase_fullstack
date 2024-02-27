const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    fullName: () => person.firstName + " " + person.lastName,

    // ReferenceError: Cannot access 'person' before initialization
    // fullName2: person.firstName + " " + person.lastName,
};

console.log(person.fullName())

person.firstName = "ryan"



