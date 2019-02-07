// name
// job title
// salary
// status

var employees = [];

function Employee(name, title, salary, status="Full Time"){
    this.name = name
    this.title = title
    this.salary = salary
    this.status = status
    this.printEmployeeForm = function (){
        return ([name, title, salary, status])
    }
}

employees.push (new Employee("Bob", "writer", 20))
employees.push (new Employee("Fred", "Editor", 40))
employees.push (new Employee("Harold", "Janitor", 10, "Part Time"))

for(i=0;i<employees.length;i++){
    console.log(employees[i].printEmployeeForm())
}