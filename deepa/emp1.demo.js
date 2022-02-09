function Employee(name,id,salary) {
    this.name = name;
    this.id = id;
    this.salary = salary;
    this.work = function () {
      console.log(this.name +"is  working");

},
this.stop = function() {
      console.log(this.id + "is stopped working");

};

}

 let Employee1 = new Employee( "Abhijeet",4175, 4577758);
 let Employee2 = new Employee("Sana", 4575 ,59755);
 let Employee3 = new Employee(" Naina", 5875,587945);


 console.log(Employee1);
 console.log(Employee2);
 console.log(Employee3);
   
