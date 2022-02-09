//in operator
let user = { name : "Vinay", age : 30};

console.log("age" in user);   /// true, user.age exists
console.log("id" in user) ; //false, user.id doesn't exist