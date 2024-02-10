/*document.write("자동차") 
변수:일시적으로 저장하는 장소
변수 만드는 법 : 영어로 시작($, 언더바로 시작해도 됨
    특수문자,공백 사용 불가)
자바스크립트 기본 문법
1.한 문장이 끝나면;(세미콜론)
2.명령어는 소문자 입력(대소문자 구분함)
*/

/*a=100;
b=200;
c=a+b;
k="홍길동";
document.write(c+" : "+k);*/

var menu1, menu2, menu3, menu4, pic, no, count = 1;
window.onload = function () {
    menu1 = document.getElementById("menu1");
    menu2 = document.getElementById("menu2");
    menu3 = document.getElementById("menu3");
    menu4 = document.getElementById("menu4");

    pic = document.querySelector(".pic");
    no = document.querySelector(".no");

    menu1.onclick = function () {
        pic.src = "img/0205/img1.jpg";
        no.innerHTML = 1;
    }

    menu2.onclick = function () {
        pic.src = "img/0205/img2.jpg";
        no.innerHTML = 2;
    }

    menu3.onclick = function () {
        pic.src = "img/0205/img3.jpg";
        no.innerHTML = 3;
    }

    menu4.onclick = function () {
        pic.src = "img/0205/img4.jpg";
        no.innerHTML = 4;
    }

    let prev, next;
    prev = document.querySelector(".prev");
    next = document.querySelector(".next");


    /*next.onclick = function () {
        if (count < 4)
            count++;
        console.log(count);
        no.innerHTML = count;
        pic.src = "img/0205/img" + count + ".jpg";
    }
    prev.onclick=function(){
        if(count>1)
            count--;
        console.log(count);
        no.innerHTML=count;
        pic.src="img/0205/img"+count+".jpg";
    }*/
    next.addEventListener("click", function () {
        if (count < 4)
            count++;
        no.innerHTML = count;
        pic.src = "img/0205/img" + count + ".jpg";
    })

    prev.addEventListener("click", function () {
        if (count > 1)
            count--;
        console.log(count);
        no.innerHTML = count;
        pic.src = "img/0205/img" + count + ".jpg";
    })
}
