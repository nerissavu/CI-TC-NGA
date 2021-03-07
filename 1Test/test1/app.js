let str_numbers = prompt("Please enter your array of numbers, splited by','")
let m = prompt('Please enter a number')
let a_numbers = str_numbers.split(",").map(Number)
console.log(typeof a_numbers[1])

for (i=0;i<a_numbers.length;i++){
    if(a_numbers[i] > 0){
        let x = m - a_numbers[i]
        for(j=0;j<(a_numbers.length-1);j++){
            if((a_numbers[j]) > (a_numbers[i])){
                if(a_numbers[j] == x){
                    console.log(a_numbers[i]+','+a_numbers[j])
                } 
                else {
                    console.log('Không tìm thấy')
                }
            }
        }
    } 
    else {
        console.log('Please enter your number again')
    }
}