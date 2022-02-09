//setter example 
var emp = {
    name : "Jack",
    salary : 606060,
    city : "Bangalore",

    set empCity(empCity){
        this.city = empcity;

    },
    set empName(empName){
        this.name = empName;

    }
    
};
emp.City = "Mangaluru";
emp.empName ="Manasa";

console.log(emp["name"]);
console.log(emp.city);



