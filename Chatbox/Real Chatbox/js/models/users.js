import {md5} from '../utils.js'

export async function register(name, email, password) {
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
            password: md5(password),
        });
        // bất đồng bộ
        // try/catch/finally
    
        console.log('Register Successfully')
    }else {
        alert('This email has been used')
    }
}

export async function login(email, password) {
    let response = await firebase 
        .firestore()
        .collection('users')
        .where('email','==',email)
        .where('password','==', md5(password))
        .get();

    if(response.empty) {
        alert('Email or Password is not correct')
    } else {
        alert('Login successfully')
    }
    
}

export function getUserInfo() {

}

// xử lý bất đồng bộ: callback, promise, async/await
// phương châm: chỗ nào có promise -> có await -> có async