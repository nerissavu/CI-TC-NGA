// CREATE USERS

function createUser(data){
    firebase.firestore().collection('users').add(data);
}

// createUser({
//     name: "Vũ Thu Nga",
//     age: 18,
//     user_reviews: []
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
//     name: 'Happy Death Day',
//     genres: [
//         'Horror',
//         'Slasher',
//         'Dark comedy',
//         'Mystery',
//         'Thriller'
//     ],
//     link: 'https://www.youtube.com/watch?v=1NTaDm3atkc',
//     movie_reviews: []
    
// });

// ____________________________________________________________________
// CREATE REVIEW

async function createReview(user_id, movie_id, data){
    let user_result = await firebase.firestore().collection('users').doc(user_id).get();
    let movie_result = await firebase.firestore().collection('movies').doc(movie_id).get();
    let user_reviews = user_result.data().user_reviews 
    let movie_reviews = movie_result.data().movie_reviews
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

// createReview('H20PWVLNonFDYFKV8U7o', 'naCT7czZhRABfCPRrBvF',
// {
//     content: 'So scary'
// });

// ____________________________________________________________________
// FIND MOVIE
// Bài này em làm 2 cách ạ
//___________________________ Cách 1 ____________________________
// async function findMovie() {
//     let search_data = prompt("Please enter the Movie name")
//     let result = await firebase
//         .firestore()
//         .collection('movies')
//         .where(('name').toLowerCase(), '>=', search_data.toLowerCase())
//         .where(('name').toLowerCase(), '<=', search_data.toLowerCase() +'\uf8ff')
//         .get();

//     console.log(result)
//     console.log(result.docs)
//     if (result.docs.length > 0){
//         for(let document of result.docs){
//             console.log(document.data())
//         }
//         console.log("Finished")
//     }
//     else{
//         console.log(`Can't find the movie with name "${search_data}"`)
//     }

// }

// findMovie()
//_______________________ Cách 2 ______________________________
async function findMovies() {
    let search_data = prompt("Please enter the Movie name").toLowerCase()
    let result = await firebase.firestore().collection('movies').get();
    // console.log(result)
    movies = []
    movies_lowercase = []
    for(let document of result.docs){
        let movie = document.data().name
        let movie_lowercase = document.data().name.toLowerCase()
        movies.push(movie)
        movies_lowercase.push(movie_lowercase)
        // console.log(document.id, document.data())
    }
    // console.log(movies)

    let movie_results = []
    for(i=0;i<movies.length;i++){
        if(movies_lowercase[i].includes(search_data) === true){
            movie_results.push(movies[i])
            // console.log(movies[i])
            async function findMovie() {
                let movie_name = String(movies[i])
                let result = await firebase
                    .firestore()
                    .collection('movies')
                    .where('name', '==', movie_name)
                    .get();
                for(let document of result.docs){
                    console.log(document.data())
                }
            }
            findMovie()
        }
    }
    if(movie_results.length > 0){
        console.log('Finished')
        console.log(movie_results)

    }
    else{
        console.log(`Can't find the movie with name "${search_data}", please provide us with a more specific name`)
    }

}

findMovies()