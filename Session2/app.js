//class: bản thiết kế
//object: được tạo từ class, là 1 instance của class

let a = new Object();
a.name = "Nga"
a.age = 18
a.address = "Hanoi"

class NYC {
    name;
    age;
    sex;
    address;

    constructor(name, age, sex, address){
        console.log("Đối tượng được khởi tạo với dữ liệu:")
        console.log(name, age, sex, address)
        this.name = name; // this: đối tượng chúng ta đang khởi tạo
        this.age = age;
        this.sex = sex;
        this.address = address;
    }

    cheat(){
        console.log('Vừa đá xong')
    }

    comeBack(){
        console.log('Quay lại nhá 👌')
    }
}

// let nyc1 = new NYC('A',20,'female','Hanoi');

let nyc2 = new NYC('B',19,'female','TB')
nyc2.name
nyc2.cheat()
// nyc1.name = "A";
// nyc1.age = "22";
// nyc1.sex = "female";
// nyc1.address = "Hanoi";

console.log(nyc2)

class Boy{
    name;
    age; 
    // handsome;

    static
    f = [
        'play game',
        'music',
        'girl'
    ]
    get favourite(){
        return this.f
    }

    set favourite(value){
        this.f = value;
    }

    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    playGame(){
        console.log('Chơi game')
    }
}

class GoodBoy extends Boy {
    cooking;

    constructor(name, age, cooking){
        super();
        this.cooking = cooking;
        // delete this.handsome
    }

    takeCare(){
        console.log('Quan tâm, chăm sóc')
    }
}

class BadBoy extends Boy{
    rich;

    constructor(name, age, rich){
        super();
        this.rich = rich;
    }
}

let Long = new GoodBoy('Duy Long', 20,' master chief');
let Nga = new BadBoy('Thu Nga', 18, 'platinum');
let Chinh = new Boy('Đỗ Chinh', 23);

// Chinh.cooking;
console.log(Long.favourite);
Long.favourite = ['phượt','đọc sách'];

class Calc {

    //static
    static sum(a,b){
        return a+b;
    }

    static subtract(a,b){
        return a -b;
    }

    static multiply(a,b){
        return a*b;
    }

    static power(a, b){
        return a**b;
    }
}

let c1 = new Calc();
c1.sum(1,10);

Calc.sum(1,10);
Calc.subtract(2,3);
/*
animal:
    name
    leg
    sound

reptile kế thừa Animal
    weight
    length

    speak() in ra màn hình: Con này kêu + sound

Mammal: kế thừa Animal
    furColor

Dog kế thừa Mammal
    leg = 4
    speak = "Go go"

    bite()
*/
