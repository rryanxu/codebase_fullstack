var person = {
    firstName: "Ryan",
    lastName: "Xu",
    language: "N/A",
    set lang(value) {
        this.language = value.toUpperCase();
    },

    set first_name_(str) {
        this.firstName = str
    }
};


Object.defineProperty(person, "firstName", {
    writable: false,
    enumerable: false,
    configurable: true
})


person.first_name_ = "william"


console.log(person.firstName)
