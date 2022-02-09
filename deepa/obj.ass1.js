var myCar1 = {
    name : " Eritga",
    model : " 2022", 
    color : " blue", 
    speed : 0,
    
};
myCar1.start = function() {
    console.log(this.name + " is moving");
    console.log(this.color + "is awesome");
}


var myCar2 = {
    name : "BMW",
    model : " 2022", 
    color : " white", 
    speed: 0,
};
myCar2.start = function() {
    console.log(this.name + " is moving");
    console.log(this.color + " is awesome");
}

console.log(myCar1.name, myCar1.model, myCar1.color, myCar1.speed);
console.log(myCar2.name, myCar2.model, myCar2.color, myCar2.speed);

console.log(typeof myCar1);
console.log(typeof myCar2);

console.log(myCar1);
console.log(myCar2);
myCar1.start();
myCar2.start();




    