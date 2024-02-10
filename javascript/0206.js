let i, menu;
window.onload=function(){
    /* document.write("<br>자동차-0");   
    document.write("<br>자동차-1");   
    document.write("<br>자동차-2");   
    document.write("<br>자동차-3");   
    document.write("<br>자동차-4");   
    
    for(i=0; i<5; i++){
        document.write("<br>자동차-"+i);
        document.write("<br>다음-"+i+"<br>");
    }

    let sum=0, odd=0;
    for(i=1; i<101; i++){
        if(i%2==0)
            sum+=i;         
        else
            odd+=i;
    }
    document.write("짝수의 합 : "+sum);
    document.write("<br>홀수의 합 : "+odd);

    let str=""
    for (i=1; i<10; i++){        
        str+="<br>3 * "+i+" = "+3*i;
        
    }
    box=document.querySelector(".box");
    box.innerHTML=str;

    // 원하는 숫자를 입력하고 버튼을 클릭하면 해당 구구단 출력
    let dan,ok,str="",box;
    dan=document.querySelector(".dan");
    ok=document.querySelector(".ok");
    box=document.querySelector(".box");
    ok.addEventListener("click",function(){
        console.log(dan.value);
        // str=""
        let gu=parseInt(dan.value);
        for(i=1;i<=9;i++){
            str+="<br>"+gu+" * "+i+" = "+gu*i;}
        box.innerHTML=str;
    })*/
menu=document.querySelector(".menu").getElementsByTagName("li");
for(i=0; i<7; i++){
    menu[i].style.fontSize="1.3rem";
    menu[i].style.color="grey";
}

let img7;
img7=document.querySelector(".img7").getElementsByTagName("div");
for(i=0; i<7; i++){
    img7[i].style.background="url(img/0206/"+[i]+".jpg)";
    img7[i].style.backgroundSize="100% 100%";
}

// let big;
// big=document.getElementById("big");
// pic.src="img/bg"+i+".jpg";
// img7[i].onclick=function(){
// }
}

$(function(){
    $(".menu li").on("click",function(){
        $(".menu li").css("background","none").css("color","black");
        $(this).css({"background":"black","color":"white"});
    })
    $(".img7 div").on("click", function(){
        console.log();
        var no=$(this).index();
        console.log(no);
        $(".pic").attr("src","img/ss/"+no+".jpg");

    })
})
