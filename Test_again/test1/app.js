let str_numbers = prompt("Please enter your array of numbers, splited by','")
let m = prompt('Please enter a number')
let a_numbers = str_numbers.split(",").map(Number)
let y = 0

for (i=0;i<a_numbers.length;i++){
    let x = m - a_numbers[i]
    for(j= i+1 ; j< a_numbers.length; j++){
        if (a_numbers[j] != a_numbers[i]){
            if(a_numbers[j] == x){
                console.log(a_numbers[i]+','+ a_numbers[j])
                y++;
            } 
        }
    }
}

if (y==0){
    console.log("Can't find")
}

