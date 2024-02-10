let kor = 50, eng = 60, math = 70, sum, avg;
let k, e, m, s, a;
window.onload = function () {
    var calc = document.getElementById("calc");
    calc.addEventListener("click", function () {
        s = kor + eng + math;
        a = s/3;
        console.log("총점 : "+ s +" 평균 : " +a);
        sum=document.querySelector(".sum");
        avg=document.querySelector(".avg");
        sum.innerHTML=s;
        avg.innerHTML=a;
    })
}



