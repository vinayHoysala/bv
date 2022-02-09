//creating object using object literal i.e{}
var myCar ={}

console.log(myCar);


//op: {}




//property pointing to a function (method)
var myCar1 ={
    name :"Tiago",
    model:"2018",
    color:"Orange",
    speed:"0",
    move:function(){
        this.speed++
    }
};

myCar1.move();myCar1.move();myCar1.move();
console.log(myCar1.speed);

//op:3