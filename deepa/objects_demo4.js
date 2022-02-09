//accessing all properties and values
//present in an object usinf for... loop

var msg1 = {to: 9611100033,
           delivered:true,
           read:false,
           from:9611696116};
//get all the properties defined in 
//the object msg1
for(prop in msg1)
    console.log(prop);
    
    
//properties & values
for(property in msg1)
    console.log(property + " : " + msg1[property]);

    console.log('-------');
    console.log(msg1["delivered"]);
    var keyX = "delivered";
    console.log(msg1[keyX]);
