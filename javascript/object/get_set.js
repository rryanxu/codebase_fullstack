const person = {
    // note: properties
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    // note: methods
    fullName: () => person.firstName + " " + person.lastName,

    // note: getter & setter
    get full_name(){
        return this.firstName +' '+this.lastName
    },

    set first_name(str){
        this.firstName=str
    }

    // ReferenceError: Cannot access 'person' before initialization
    // fullName2: person.firstName + " " + person.lastName,
};

console.log(person.fullName())


person.lastName="Xu"
// setter
person.first_name = "Ryan"
// getter
console.log(person.full_name)


