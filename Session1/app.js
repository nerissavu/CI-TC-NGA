//1. Không sử dụng condition hãy viết chương trình 
// Khi nhập vào 0 --> in ra 1 
// Khi nhập vào 1 --> in ra 0
// => in ra 1-x 

//2. Cho mảng sau [9,8,7,6,5,4,3,2,1]. Không dùng vòng lặp, không dùng condition hãy in ra màn hình các 
// số chẵn có trong mảng
//=> console.log(8,6,4,2)

//3. Xây dựng ứng dụng như sau 

//addEventlistener();
// .onclick, onmouseover, on..., onsubmit
// đặt thuộc tính

window.onload = function(){
    let $no = document.getElementById('no');
    let opacity = 1;

    $no.addEventListener('mouseover', function() {

        $no.style.position = "absolute";

        let randomLeft = Math.random() * (window.innerWidth - 300);
        let randomTop = Math.random() * (window.innerHeight - 200);

        $no.style.top = randomTop + 'px';
        $no.style.left = randomLeft + 'px';

        opacity = opacity - 0.2;
        $no.style.opacity = opacity--; 
    });
}

// import {helloByLaos, helloByVietnamese} from "./hello.js";
// helloByVietnamese();
// helloByLaos();

// import goodbye from "./goodbye.js";