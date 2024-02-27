// https://javascript.info/object-copy


let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };


// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

permissions1 = false
console.log(permissions1)

console.log(user)

// now user = { name: "John", canView: true, canEdit: true }

