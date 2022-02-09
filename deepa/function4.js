function funcA(a,b) {
return a + b;
}

function funcA(c) {
    return c;
}
console.log(funcA(2));
console.log(funcA(3,4));

///Javascrpit does not suppert method overloading,
//So, if it sees/parses two or more functions
//with a same name, it will just consider the 
///last defined function and overwrite the previous ones.

///op: 2 3




////own ex
function  funcX(x,y){
return x + y;
}

function funcX(z) {
    return z;
    
}
console.log(funcX(51,5));
console.log(funcX(10,6,451,5));    ///op: 51  10

