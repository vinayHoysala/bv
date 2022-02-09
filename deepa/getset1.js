//getter example
var emp = {
    name: "Jack",
    salary: 606060,
    city : "Bangalore",
    get empCity(){
        return this.city;
    },get empCity(){
        return this.name;

    }
    
};


console.log(emp.empCity);
console.log(emp.empCity);
