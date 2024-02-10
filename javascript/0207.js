const menuA=[
    "토끼와 거북이",
    "4차산업",
    "취업과 진로",
    "경쟁력",
    "NCS 국가직무"
];
let i;
window.onload=function(){
    for (i=0; i<menuA.length; i++) {
        $("nav div:nth-child(" + (i+1) + ")").html(menuA[i]);
        $(".title."+i).html(menuA[i]);
    }
}

$(function(){
    $(".bar").on("click", function(){
        $("nav").animate({"left":"80%"},500);
    })
    $("nav div").on("click", function(){
        $("nav").animate({"left":"100%"},500);
        no=$(this).index();
        $(".at").hide();
        $(".at"+no).show();
    })

})
