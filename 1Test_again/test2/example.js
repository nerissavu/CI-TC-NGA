import {Manager} from "./manager.js"
import {Employee} from "./employee.js"
import {Test} from "./test.js"
import {Developer} from "./developer.js"


let employee1 = new Developer('Huy','coding' )
let employee2 = new Test('Hà','test')
let employee3 = new Developer('Cường','coding')
let employee4 = new Test('Dũng','test')
let manager1  = new Manager('Nga', 'manage', [employee1,employee2,employee3])
manager1.show()

manager1.addEmployee(employee4)

employee1.displayInfo()
