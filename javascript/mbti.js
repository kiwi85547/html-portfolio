window.onload = function () {
    /*    let menu0, menu1, menu2, menu3;
        menu0 = document.getElementById("menu0");
        menu1 = document.getElementById("menu1");
        menu2 = document.getElementById("menu2");
        menu3 = document.getElementById("menu3");
    
        let sub0, sub1, sub2, sub3;
        sub0 = document.querySelector(".sub0");
        sub1 = document.querySelector(".sub1");
        sub2 = document.querySelector(".sub2");
        sub3 = document.querySelector(".sub3");
    
        let title = document.querySelector(".title");
        menu0.onclick = function () {
            title.innerHTML = "MBTI검사에 오신것을 환영합니다"
        }
        menu1.onclick = function () {
            title.innerHTML = "DISC검사에 오신것을 환영합니다"
        }
        menu2.onclick = function () {
            title.innerHTML = "흥미적성검사에 오신것을 환영합니다"
        }
    */


    // $(function () {
    $(".menu li").on("click", function () {
        $(".menu li").css("background", "none");
        $(this).css("background", "orange");

        $("article").hide();

        no = $(this).index();
        if (no == 0) {
            $(".title").text("MBTI검사에 오신것을 환영합니다");
            $(".at0").show();

            $(".left .sub0").text("에너지 충전");
            $(".left .sub1").text("인식기능(정보수집)");
            $(".left .sub2").text("판단기능(결정,선택)");
            $(".left .sub3").text("생활양식(판단,인식)");
        }
        else if (no == 1) {
            $(".title").text("MBTI검사에 오신것을 환영합니다");
            $(".at1").show();
            $(".left .sub0").text("주도형");
            $(".left .sub1").text("사고형");
            $(".left .sub2").text("안정형");
            $(".left .sub3").text("신중형");
        }
        else if (no == 2) {
            $(".title").text("흥미적성검사에 오신것을 환영합니다");
            $(".at2").show();
        }
        else if (no == 3) {
            $(".title").text("학습역량검사에 오신것을 환영합니다");
            $(".at3").show();
        }
    })
    $(".left div").on("click", function () {
        $(".left div").css("background", "none");
        $(this).css("background", "pink");
    })
    $(".at0_box0").on("click", function () {
        $(".at0_box0").css("opacity", "0.4")
            .css("background", "black")
            .css("color", "white");
        $(".at0_box1").css("opacity", "1")
            .css("background", "white")
            .css("color", "black");
    })
    $(".at0_box1").on("click", function () {
        $(".at0_box1").css("opacity", "0.4")
            .css("background", "black")
            .css("color", "white");
        $(".at0_box2").css("opacity", "1")
            .css("background", "white")
            .css("color", "black");
    })
    $(".at0_box2").on("click", function () {
        $(".at0_box2").css("opacity", "0.4")
            .css("background", "black")
            .css("color", "white");
        $(".at0_box3").css("opacity", "1")
            .css("background", "white")
            .css("color", "black");
    })
    $(".at0_box3").on("click", function () {
        $(".at0_box3").css("opacity", "0.4")
            .css("background", "black")
            .css("color", "white");
        $(".at0_box4").css("opacity", "1")
            .css("background", "white")
            .css("color", "black");
    })
    $(".at0_box4").on("click", function () {
        $(".at0_box4").css("opacity", "0.4")
            .css("background", "black")
            .css("color", "white");
        $(".at0_box5").css("opacity", "1")
            .css("background", "white")
            .css("color", "black");
    })
    $(".at0_box5").on("click", function () {
        $(".at0_box5").css("opacity", "0.4")
            .css("background", "black")
            .css("color", "white");
        $(".at0_box6").css("opacity", "1")
            .css("background", "white")
            .css("color", "black");
    })
    $(".at0_box6").on("click", function () {
        $(".at0_box6").css("opacity", "0.4")
            .css("background", "black")
            .css("color", "white");
        $(".at0_box7").css("opacity", "1")
            .css("background", "white")
            .css("color", "black");
    })
    $(".at0_box7").on("click", function () {
        $(".at0_box7").css("opacity", "0.4")
            .css("background", "black")
            .css("color", "white");
        $(".at0_box8").css("opacity", "1")
            .css("background", "white")
            .css("color", "black");
    })
    $(".at0_box8").on("click", function () {
        $(".at0_box8").css("opacity", "0.4")
            .css("background", "black")
            .css("color", "white");
        $(".at0_box9").css("opacity", "1")
            .css("background", "white")
            .css("color", "black");
    })
    $(".at0_box9").on("click", function () {
        $(".at0_box9").css("opacity", "0.4")
            .css("background", "black")
            .css("color", "white");
        $(".at0_box10").css("opacity", "1")
            .css("background", "white")
            .css("color", "black");

    })
}
