let sheeps = prompt("Please enter your masses of sheep wool , splited by','")
let m = prompt('Please enter the number of months')
let x = 0
let array_sheeps = sheeps.split(",").map(Number)

for(i=1;i<=m;i++){
    for(j=0;j<array_sheeps.length;j++){
        array_sheeps[j]+=2
    }
    // console.log(array_sheeps)
    let max = Math.max.apply(null, array_sheeps)
    if(max >3){
        var index = array_sheeps.indexOf(max)
        // console.log(array_sheeps[index])
        array_sheeps[index] = 1;
        x++
    }
}
console.log(array_sheeps)
console.log('After '+ m +' month, the total mass of sheep wool that you have sheared is ' + x*2)

function Binary_search(A,n,T ){
    let L = 0;
    let R = n-1
    while (L<=R){
        m = Math.floor((L + R)/2);
        if (A[m] < T){
            L = m+1
        } 
        else if ( A[m] > T){
            R = m-1
        }
        else{
            return m
        }
    }
    return 'Không tìm thấy'

}

let d = prompt("Please enter the number of sheep's wool mass")
document.getElementById("answer").innerHTML = Binary_search(array_sheeps,array_sheeps.length,d)