let str_numbers1 = prompt("Please enter your first array of numbers, splited by','")
let numbers1 = str_numbers1.split(",").map(Number)
let str_numbers2 = prompt("Please enter your second array of numbers, splited by','")
let numbers2 = str_numbers2.split(",").map(Number)
let numbers = numbers1.concat(numbers2)
console.log(numbers)

numbers.sort(function(a, b){
    return a-b
});

console.log(numbers)