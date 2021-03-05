// let temp = members[0];
// for (let i = 0; i<members.length; i++){
//     if(temp.money < members[i].money){
//         temp = members[i]
//     }
// }

// console.log('Thành viên nhiều tiền nhất là:' +temp.name);

//for (let i = 0)
//for (let member of members)
//for (let i in members)
//forEach(function)

// members.forEach(function(member)){
//     // can not break
// }

// const sapXepTangDan = (list) => {
//     const ListTang = List.sort((a,b) => {
//         return a.money - b.money
//     })
//     console.log(listTang)
//     const listTang = listTang.map ( el =>el.name)
//     console.log(listName)
// }

// sapXepTangDan(members)

// members.sort(function(a,b){
//     return  a.money - b.money;
// });

// console.log(members);

// bubble sort, selection sort, quick sort, merge sort,...

function Binary_search(arr,value){
    let left = 0;
    let right = arr.length - 1
    while(left<=right){
        let middle = Math.floor((left + right)/2)
        if(arr[middle].money == value){
            return true;
        }
        else if(arr[middle].money < value){
            left = middle +1;
        }
        else if(arr[middle].money > value){
            right = middle -1;
        }
    }
    return false
}

// let arr = [1,2,3,4,5,6,7,8,9,10]

// console.log(Binary_search(arr,2))

let money = Number(prompt('nhap vao so tien: '))
Binary_search(members, money)

