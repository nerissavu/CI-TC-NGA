//bài này em chưa làm xong ạ, nhma em sẽ cố gắng hoàn thiện nốt ạ

var no_of_students = 0
while (true){
    var no_of_students = prompt("Please enter the number of students in your class (min>2) ")
    if (no_of_students > 2){
        break;
    }
    alert("Please enter again")
}
var gpa_scores = []
for( var i = 0; i < no_of_students; i++ ){
    var ingredient_score = prompt("Please enter your student " +(i+1)+ " ingredient score")
    var final_score = prompt("Please enter your student " +(i+1)+" final score")
    var gpa_score = ingredient_score*0.4 + final_score*0.6
    gpa_scores.push(gpa_score)
}
// for (var i = 0; i<gpa_scores.length; i++){
//     console.log(gpa_scores[i])
// }

function LetterGrade(gpa_scores){
    var result = '';
    var results = [];
    for (var i = 0; i< no_of_students; i++){
        if (gpa_scores[i] >= 8) {
            result = "A";
          } else if (gpa_scores[i] >= 7) {
            result = "B";
          } else if (gpa_scores[i] >= 6) {
            result = "C";
          } else if (gpa_scores[i] >= 4) {
            result = "D";
          } else {
            result = "F";
          }
          results.push(result); 
    }
    for (var i = 0; i<results.length; i++){
        alert(results[i])
    }
}

LetterGrade(gpa_scores)
