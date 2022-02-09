//Adding and deleting new property to an existing object
var msg1 ={to:9611100033,
msg:"How are you?",
delivered:true,
read:false,
from:9611696116};

//properties & values
for(property in msg1)
console.log(property + " :"  + msg1[property]);
console.log("-----------");
msg1.timeStamp = 10;


for(property in msg1)
console.log(property + ":" + msg1[property]);
console.log("----------");

delete msg1.from;
for(property in msg1)
console.log(property + ":"+ msg1[property]);





