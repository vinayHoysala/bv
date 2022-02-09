function employee( name, id, designation, company) {
    this.name = name;
    this.id = id;
    this.designation = designation;
    this.company = company;
}
let employee1 = new employee (' Abhijeet Singh', '4957955', 'Data Analyst', 'Wipro');
console.log(typeof employee1);
console.log( employee);

