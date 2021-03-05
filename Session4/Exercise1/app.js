let str_numbers = prompt("Please enter your numbers, splited by','")
let numbers = str_numbers.split(",")
numbers = numbers.filter((number) => {
    for (var i= 2; i<=Math.sqrt(number); i++) {
        if (number %i === 0) return false
    }
    return true
}
)

alert(numbers)