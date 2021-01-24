let studentCount = Number(prompt("Nhập số lượng sinh viên"))

let students = []

let result = {
    A:0,
    B:0,
    C:0,
    D:0,
    F:0
};

for(let i = 0; i < studentCount; i++){
    let ingredient = Number(prompt("Nhập điểm thành phần"));
    let final = Number(prompt("Nhập điểm tổng kết"));

    let gpa = 0.4 * ingredient + 0.6 * final;

    if(gpa >=8 ){
        result.A ++;
    }
    else if(gpa >=7){
        result.B ++
    }
    else if(gpa >=6){
        result.C ++
    }
    else if(gpa >=4){
        result.D ++
    }
    else{
        result.F ++
    }
}

console.log(result)
