let str = prompt("Please enter your string")
let str_array = str.split("")
let length = str_array.length
let mid = Math.floor(length/2)

for ( var i = 0; i < mid; i++ ) {
    if (str[i] !== str[length - 1 - i]) {
        console.log("FALSE")
    }else {
        console.log("TRUE");
    }
}