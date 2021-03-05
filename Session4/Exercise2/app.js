// Hãy viết chương trình "tổng kết thu nhập":
// Nhập vào 1 mảng, mỗi phần tử trong mảng là 1 thành viên trong lớp CIJS56.
// Mỗi thành viên bao gồm thông tin: tên, số tiền lì xì trong tết
// - Tìm tên thành viên có số tiền nhiều nhất
// - Sắp xếp thành viên trong lớp theo thư stuwj số tiền lì xì tăng dần
// - Nhập vào 1 số tiền bất kì, hãy sử dụng thuật toán tìm kiếm nhị phân tìm thành viên có số tiền bằng số tiền vừa nhập vào

class Student {
    name;
    money;

    constructor(name,money) {
        this.name = name;
        this.money = money;
    }
}

class Classroom {
    students = []
    
    constructor(students){
        this.students = students;
    }

    addStudent(student){
        this.students.push(student);
        console.log('Student added')
        console.log(this.students)
    }
    findMax(){
        let max = Math.max(this.students[1])
        console.log(max)
    }

}

let studentA = new Student('A',20)
let studentB = new Student('B',30)
let studentC = new Student('C',100)
let studentD = new Student('D',80)

let ClassroomA = new Classroom([studentA,studentB,studentC,studentD])
ClassroomA.findMax()