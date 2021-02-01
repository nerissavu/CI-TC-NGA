export class Employee{
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







