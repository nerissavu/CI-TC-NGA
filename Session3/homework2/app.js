//bài này em k biết cách dùng graph ntnao nên em dùng tạm cloud firestore nhé ạ :D
async function findUser() {
    let user_name = prompt("Please enter the person's name")
    let result = await firebase
        .firestore()
        .collection('users')
        .where('name', '==' , user_name)
        .get();
    console.log('The person information is')

    if (result.docs.length > 0){
        for(let document of result.docs){
            console.log(document.data())
            let relationships = document.data().relationships
            console.log("The person's relationships information is")
            for(i=0; i<relationships.length; i++){
                async function findRelationship() {
                    let result = await firebase
                        .firestore()
                        .collection('users')
                        .where('name','==', relationships[i])
                        .get();
                    for(let document of result.docs){
                        console.log(document.data())
                    }
                }
                findRelationship()
            }
        }
    }
    else{
        console.log(`Can't find the person with name "${user_name}"`)
    }


};
findUser();