import TodoContainer from './TodoContainer.js'

let data = [
    {id: 1, name: 'Nhiệm vụ 1', description: 'Mô tả chi tiết cho nhiệm vụ', deadline: '2021/03/06', isCompleted: true},
    {id: 2, name: 'Nhiệm vụ 2', description: 'Mô tả chi tiết cho nhiệm vụ', deadline: '2021/03/07', isCompleted: false},
    {id: 3, name: 'Nhiệm vụ 3', description: 'Mô tả chi tiết cho nhiệm vụ', deadline: '2021/03/08', isCompleted: true},
    {id: 4, name: 'Nhiệm vụ 4', description: 'Mô tả chi tiết cho nhiệm vụ', deadline: '2021/03/09', isCompleted: false},
    {id: 5, name: 'Nhiệm vụ 5', description: 'Mô tả chi tiết cho nhiệm vụ', deadline: '2021/03/10', isCompleted: true},
    {id: 6, name: 'Nhiệm vụ 6', description: 'Mô tả chi tiết cho nhiệm vụ', deadline: '2021/03/11', isCompleted: true},
    {
        id: 7, 
        name: 'Nhiệm vụ 7', 
        description: 'Mô tả chi tiết cho nhiệm vụ', 
        deadline: '2021/03/11', 
        isCompleted: true,
        // subTasks: [
        //     'Nhiệm vụ 7.1',
        //     'Nhiệm vụ 7.2',
        //     'Nhiệm vụ 7.3',
        //     'Nhiệm vụ 7.4',
        //     'Nhiệm vụ 7.5',
        // ]
        subTasks: [
            {id: 7.1, name: 'Nhiệm vụ 7.1', description: 'Mô tả chi tiết cho nhiệm vụ', deadline: '2021/03/11', isCompleted: true},
            {id: 7.2, name: 'Nhiệm vụ 7.2', description: 'Mô tả chi tiết cho nhiệm vụ', deadline: '2021/03/11', isCompleted: true},
            {id: 7.3, name: 'Nhiệm vụ 7.3', description: 'Mô tả chi tiết cho nhiệm vụ', deadline: '2021/03/11', isCompleted: true},
        ]
    }
]

// console.log(JSON.stringify(data))
let $app = document.getElementById('app');
for (let todoData of data) {
    //c1
    // $app.innerHTML += `
    //     <todo-container 
    //         name="${todoData.name}" 
    //         description="${todoData.description}" 
    //         deadline="${todoData.deadline}" 
    //         is-completed="${todoData.isCompleted}"
    //         >
    //     </todo-container>
    // `;

    // let $todoContainer = document.createElement('todo-container');
    // $todoContainer.setAttribute('name', todoData.name);
    // $todoContainer.setAttribute('description', todoData.description);
    // $todoContainer.setAttribute('deadline', todoData.deadline);
    // $todoContainer.setAttribute('is-completed', todoData.isCompleted);
    // if(todoData.subTasks != undefined) {
    //     $todoContainer.setAttribute('sub-tasks', JSON.stringify(todoData.subTasks));
    // }

    // $app.appendChild($todoContainer);

    let $todoContainer = new TodoContainer();
    $todoContainer.data = todoData;
    $app.appendChild($todoContainer);
}
