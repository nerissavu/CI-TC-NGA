// Tổng cộng 3 collection
// - Test(name(string), tasklist(array))
// - Developer(name(string), tasklist(array))
// - Manager(name(string), tasklist(array), employees(array))

//CREATE EMPLOYEE
async function createEmployee(id, data, position){
    if(position == 'test'){
        firebase.firestore().collection('tests').add(data);
    }
    else if(position == 'developer' ){
        firebase.firestore().collection('developers').add(data);
    }
    else if(position == 'manager' ){
        firebase.firestore().collection('managers').add(data);
    }
    else{
        console.log('Please enter your data again')
    }
    var manager_result = await firebase.firestore().collection('managers').doc(id).get();
    var employees = manager_result.data().employees
    employees.push(data.name)
    console.log(employees)
    firebase.firestore().collection('managers').doc(id).update({employees});
}

createEmployee('uBVg8OB8GWoCJDSv87nM', {
    name: 'Ngô Mạnh Hùng',
    taskList: ['coding']
}, 'test')