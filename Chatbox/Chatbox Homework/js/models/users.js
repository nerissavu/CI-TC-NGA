import {md5} from '../utils.js'

export async function signup(name, email, password) {
    let response = await firebase
        .firestore()
        .collection('users')
        .where('email','==', email)
        .get();

    console.log(response);

    if(response.empty) {
        await firebase.firestore().collection('users').add({
            name: name,
            email: email,
            // password: md5(password),
            password: password
        });
        // bất đồng bộ
        // try/catch/finally
    
        console.log('Register Successfully')
    }else {
        alert('This email has been used')
    }
}

export async function signin(email, password) {
    let response = await firebase
        .firestore()
        .collection('users')
        .where('email','==', email)
        .get();

    console.log(response)
    console.log(typeof(password))
    if(response.empty) {
        alert('Your email or your password is not correct')
    }else{
        for(let document of response.docs){
            console.log(document.password)
            // if (document.password == password){
            //     console.log('Signin Successfully')
            // }else{
            //     alert('Your email or your password is incorrect')
            // }
        }
    }


}

export function getUserInfo() {

}