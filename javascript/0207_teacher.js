const menuA = [
    "토끼와 거북이 경주",
    "취업과 진로",
    "4차 산업",
    "NCS 국가직무",
    "MBTI와 적성검사"
];
const at0A = [
    "1. 전략적인 속도 조절",
    "2. 휴식과 집중",
    "3. 지혜로운 선택",
    "4. 동료들과 협력",
    "5. 도움을 청하다"
];
const at1A = [
    "1. 전문성 강화",
    "2. 풀스택 개발자로의 전환",
    "3. 산업 성장과 수요",
    "4. 프로젝트 경험의 다양성",
    "5. 개인 공부와 경력 쌓기"
];
const backA = [
    "1.jpg", "0.jpg", "2.jpg", "3.jpg", "4.jpg",
]
let i;
window.onload = function () {
    
    for (i = 0; i < menuA.length; i++) {
        $("nav div:nth-child(" + (i + 1) + ")").html(menuA[i]);
        $(".title" + i).html(menuA[i]);
        $(".at0 .text li:eq(" + i + ")").html(at0A[i]);
        $(".at1 .text li:eq(" + i + ")").html(at1A[i]);

    }
}
let sw = 0; sw2 = 0;
$(function () {
    $(".bar").on("click", function () {
        $("nav").animate({ "left": "80%" }, 500);
        if (sw == 0) {
            $(this).html("X");
            $("nav").animate({ "left": "80%" }, 500);
            sw = 1;
        }
        else {
            $(this).html("메뉴");
            $("nav").animate({ "left": "100%" }, 500);
            sw = 0;
        }
    })


    //주메뉴 클릭하면
    $("nav div").on("click", function () {
        sw2 = 0;
        $(".bar").html("메뉴");
        $("nav").animate({ "left": "100%" }, 500);
        no = $(this).index();
        $(".at").hide();
        $(".at" + no).show();
        $(".big").css("background", "url(img/ss/" + backA[no] + ")")
            .css("backgroundSize", "100% 100%");
    })
    $(".text li").on("click", function () {
        // text_li()
        if (sw == 0) {
            sw = 1;
            text_li(this);
        }
        $(".text li").css({ "background": "white", "color": "black" })
        $(this).css({ "background": "green", "color": "white" })
    })
})


function text_li(js) {
    $(".text").animate({
        "height": "50px", "top": "90%", "padding": "0"
    }, 500, function () {
        $(".text").css({ "display": "flex", "justifyContent": "space-around" })
        $(".text li").css({
                "fontSize": "1rem", "width": "15%", "height": "100%",
                "lineHeight": "50px", "textAlign": "center",
                "marginTop": "0", "background": "white","color": "black"
            });
            $(js).css({ "background": "green", "color": "white" })
    });
    $(".big").animate({ "left": "100px", "borderRadius": "100%" }, 500);
}
