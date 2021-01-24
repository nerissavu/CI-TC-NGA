class Crush{
    name;
    age;
    appearance;
    weight;
    height;
    crush;

    constructor(name, age, appearance, weight, height, crush){
        console.log("Đối tượng được khởi tạo với dữ liệu:")
        console.log(name, age, appearance, weight, height, crush)
        this.name = name; // this: đối tượng chúng ta đang khởi tạo
        this.age = age;
        this.appearance = appearance;
        this.weight = weight;
        this.height = height;
        this.crush = crush;
    }

    flirt(){
        console.log('FLIRT')
    }

    ignore(){
        console.log('👍')
    }
}

let crush1 = new Crush('A',19,'nice','50','50','other')
let crush2 = new Crush('B',20,'nice','50','50','other')
let crush3 = new Crush('C',21,'nice','50','50','other')
let crush4 = new Crush('D',22,'nice','50','50','other')
let crush5 = new Crush('E',23,'nice','50','50','other')

console.log(crush1)
console.log(crush2)
console.log(crush3)
console.log(crush4)
console.log(crush5)

