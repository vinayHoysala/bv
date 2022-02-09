//split(delimiter)
var msg = "Welcome to Felight";
var word = msg.split("F");


console.log(word[0]);
console.log(word[1]);

//toLowerCase()
var myString = 'JavaScript Programming';
myString = myString.toLowerCase();
console.log(myString);

//toUpperCase()
var myString = 'JavaScript Programming';
myString = myString.toUpperCase();
console.log(myString);

//String.indexOf
var str = 'Java Script Programming';
console.log(str.indexOf('Script'));

//String.lastIndexOf()
var str = 'Java Script is a powerful and flexible programming language';
console.log(str.lastIndexOf('powerful'));

//String localeCompare()
var text1 = 'AD';
var text2 = 'EF';
var result = text1.localeCompare(text2);
console.log(result);

var text1 = 'AD';
var test2 = 'AD';
var result = text1.localeCompare(text2);
console.log(result);



//concat
var message =  'java script programming';
var v = message.concat(" powerful language ");
console.log(v);




