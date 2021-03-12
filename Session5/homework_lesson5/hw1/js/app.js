import ClassContainer from './ClassContainer.js'

let data = [
    {
        id: 1,
        name: 'TC-CIJS-56',
        teacher: { name: 'Teacher 1', age: 22, address: 'HN' },
        students: [
            { name: 'Student 1', age: 18, address: 'HP' },
            { name: 'Student 2', age: 22, address: 'TB' },
            { name: 'Student 3', age: 20, address: 'HY' },
            { name: 'Student 4', age: 21, address: 'HN' },
            { name: 'Student 5', age: 23, address: 'BG' }
        ],
        status: 'pending'
    },
    {
        id: 2,
        name: 'TC-CIJS-53',
        teacher: { name: 'Teacher 2', age: 22, address: 'HN' },
        students: [
            { name: 'Student 1', age: 20, address: 'TB' },
            { name: 'Student 2', age: 22, address: 'HB' },
            { name: 'Student 3', age: 25, address: 'HY' },
            { name: 'Student 4', age: 21, address: 'HN' },
            { name: 'Student 5', age: 18, address: 'QN' }
        ],
        status: 'ended'
    }
]

let $app = document.getElementById('app');
for (let classData of data) {
    let $classContainer = document.createElement('class-container');
    $classContainer.setAttribute('name', classData.name);
    $classContainer.setAttribute('teacher', JSON.stringify(classData.teacher));
    $classContainer.setAttribute('students', JSON.stringify(classData.students));
    $classContainer.setAttribute('status', classData.status);

    $app.appendChild($classContainer);


}
