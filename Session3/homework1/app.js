// CREATE USERS

function createUser(data){
    firebase.firestore().collection('users').add(data);
}

// createUser({
//     name: "Vũ Thu Nga",
//     age: 18,
//     reviews: []
// });
// ____________________________________________________________________
//CREATE ADMINS
function createAdmin(data){
    firebase.firestore().collection('admins').add(data);
}

// createAdmin({
//     name: "Đỗ Đức Trọng",
//     age: 18,
//     movie_names: []
// });
// ____________________________________________________________________

//CREATE MOVIE

async function createMovie(id, data){
    firebase.firestore().collection('movies').add(data);
    var admin_result = await firebase.firestore().collection('admins').doc(id).get();
    var movie_names = admin_result.data().movie_names
    movie_names.push(data.name)
    console.log(movie_names)
    firebase.firestore().collection('admins').doc(id).update({movie_names});
}

// createMovie('QaGHWEhEwJYnbkOaSphU',
// {
//     name: 'Alone',
//     genres: [
//         'Mystery',
//         'Thriller'
//     ],
//     link: 'https://www.youtube.com/watch?v=RQNL2x4wK1s',
//     reviews: []
    
// });

// ____________________________________________________________________
// CREATE REVIEW

async function createReview(user_id, movie_id, data){
    let user_result = await firebase.firestore().collection('users').doc(user_id).get();
    let movie_result = await firebase.firestore().collection('movies').doc(movie_id).get();
    let user_reviews = user_result.data().reviews 
    let movie_reviews = movie_result.data().reviews
    let user_name = user_result.data().name
    let movie_name = movie_result.data().name
    user_reviews.push(`${data.content} for ${movie_name}`)
    movie_reviews.push(`${data.content} by ${user_name}`)
    firebase.firestore().collection('users').doc(user_id).update({user_reviews});
    firebase.firestore().collection('movies').doc(movie_id).update({movie_reviews});
    firebase.firestore().collection('reviews').add(data)
    .then(function(docRef){
        // console.log("Document written with ID: ", docRef.id);
        firebase.firestore().collection('reviews').doc(docRef.id)
        .update({
            movie_name: movie_name, 
            user_name: user_name});
        console.log("You can now also access this. as expected: ", this.foo)
    }
    )
    .catch(error => console.error("Error adding document: ", error))

    console.log(movie_reviews)


}

// createReview('QdJPTt1EdXTNYSPVY7ce', 'gwjGckgtgkWJavyoBLuM',
// {
//     content: 'Excellent'
// });

// ____________________________________________________________________
// FIND MOVIE

async function findMovie() {
    let search_data = prompt("Please enter the Movie name")
    let result = await firebase
        .firestore()
        .collection('movies')
        .where('name', '>=', search_data)
        //.where('name', '<', search_data +'z')
        .get();

    console.log(result)
    for(let document of result.docs){
        console.log(document.data())
    }
    console.log("Finished")
}

findMovie()
