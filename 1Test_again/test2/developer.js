import {Employee} from "./employee.js"

export class Developer extends Employee{
    constructor(name, taskList){
        super(name,taskList);
    }
}