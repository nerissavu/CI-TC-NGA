// CREATE

function createUser(data){
    firebase.firestore().collection('users').add(data);
}

// createUser({
//     name: "Ly",
//     age: 18,
//     address: 'Hà Nội',
//     status: "ế",
//     types: [
//         "đẹp trai",
//         "cao to"
//     ],
//     appearances: [
//         'xinh gái',
//         'cute',
//     ]
// });


// READ
async function readUserById(id) {
    let result = await firebase.firestore().collection('users').doc(id).get();
    console.log(result);
    console.log(result.data())
}

readUserById("mcD6amXbhHmM8hIrlQO0")

async function readAllUsers() {
    let result = await firebase.firestore().collection('users').get();
    console.log(result)

    for(let document of result.docs){
        console.log(document.data())
        console.log(document.id, document.data())
    }
}
// readAllUsers()

async function readUserWithCondition(field, operator, value) {
    let result = await firebase
        .firestore()
        .collection('users')
        .where(field, operator, value)
        .get();

    console.log(result)
    for(let document of result.docs){
        console.log(document.data())
        console.log(document.id, document.data())
    }
}

// readUserWithCondition('status', '==','ế');
// readUserWithCondition('age','>=', 20);
// readUserWithCondition('appearances','array-contains','đẹp trai')

//UPDATE

function updateUser(id, data){
    firebase.firestore().collection('users').doc(id).update(data);
}

// updateUser('PIiqm9gZuDhiyaczAUDo',{
//     name: 'Nga',
//     age: '20',
    
//     character: [
//         'dịu dàng',
//         'đanh đá👌',
//         'quạo',
//     ]
// } 
// )
//DELETE

function deleteUser(id) {
    firebase.firestore().collection('users').doc(id).delete();
}
//REALTIME UPDATE