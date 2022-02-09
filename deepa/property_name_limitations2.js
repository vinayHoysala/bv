let obj = {
    0: "test"  //same as "0" : "test"
};

//both alerts access the same property (the number 0 is converted to string "0")
console.log( obj ["0"]);       //test
console.log(obj[0]);        //test (same property)