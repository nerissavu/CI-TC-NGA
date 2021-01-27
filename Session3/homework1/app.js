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
    user_reviews.push(data.content)
    movie_reviews.push(data.content)
    firebase.firestore().collection('users').doc(user_id).update({user_reviews});
    firebase.firestore().collection('movies').doc(movie_id).update({movie_reviews});
    firebase.firestore().collection('reviews').add(data);
    console.log(movie_reviews)
    // let user_name = user_result.data().name
    // let movie_name = movie_result.data().name

}

// createReview('QdJPTt1EdXTNYSPVY7ce', 'gwjGckgtgkWJavyoBLuM',
// {
//     name_of_movie: String(movie_name),
//     name_of_user: String(user_name),
//     content: 'Excellent'
// });
