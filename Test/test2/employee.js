class Company{
    employees = [];
    name

    constructor(name, employees){
        this.employees = employees;
        this.name = name
    }

    show() {
        if (this.employees.length > 0) {
          console.log(this.employees);
        } else {
          console.log("No employee");
        }
      }
}

class Employee{
    name;
    taskList;

    constructor(name, taskList){
        this.name = name;
        this.taskList = taskList
    }

    displayInfo(){
        console.log(`My name is ${this.name} and my taskList is ${this.taskList}`)
    }
}

class Developer extends Employee{
    constructor(name, taskList){
        super(name,taskList)
    }
}

class Test extends Employee{
    constructor(name, taskList){
        super(name,taskList)
    }
}

class Manager extends Employee{
    constructor(name, taskList){
        super(name,taskList)
    }

    addEmployee(employee){
        this.employees.push(employee)
    }
}
let employee1 = new Developer('Huy','coding' )
let employee2 = new Test('Hà','test')
let employee3 = new Manager('Nga', 'manage')
let employee4 = new Developer('Cường','coding')
let CompanyA = new Company('A',[employee1,employee2,employee3])

employee3.addEmployee(employee4)
CompanyA.show()



