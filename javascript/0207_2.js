const menuA = ["회사소개", "주문예약", "매장관리", "판매실적", "도움말"];
const imgA = ["6", "1", "2", "3", "4",]
const img_textA = ["Good", "Thank you", "Excellent", "Hi", "Have a nice day"]

window.onload = function () {
    for (i = 0; i < 5; i++) {
        $("header div:eq(" + i + ")").text(menuA[i]);
    }


}
$(function () {
    $("header div").on("click", function () {
        $("header div").css("background", "white");
        $(this).css("background", "orange");
        no = $(this).index();
        $(".pic").attr("src", "img/0206/" + imgA[no]+".jpg");
        console.log("img/" + imgA[no]);
        $(".text").html(img_textA[no]);
    })

    $(".menu").on("click", function () {
        $("nav").animate({ "left": "0" }, 500);
    })
    $("nav div").on("click", function () {
        $("nav").animate({ "left": "-100px" }, 200);
    })

})

