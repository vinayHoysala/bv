function Employee(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
}


this.work = function () {
    console.log(this.name, 'is working');

    }
this.play = function () {
    console.log(this.name, ' is playing');
    }
this.riseSalary = function(percentage) {
      this.salary = this.salary + (this.salary/100 * percentage);
  
}
let emp1 = new Employee(1154, 'Deepa',550000);
let emp2 = new Employee (1656, 'Pihu' ,50000);
let emp3 = new Employee (4854 , 'Nikhil', 100000);

emp2.riseSalary(10);
console.log(emp2);

emp1.riseSalary(100);
console.log(emp1);


////output not proper

