window.onload=function(){
    $(function(){
        $(".menu").hide();
        $(".at").hide();
        $(".at0").show();
    })
}
let no;
$(function(){
    $(".menu_list li").on("click",function(){
        no=$(this).index();
        console.log(no);
        $(".menu").hide();
        $(".menu" + no).show();
        $(".at").hide();
        $(".at" + no).show();
        
    })
    $(".menu li").on("click", function() {        
        no=$(this).attr("class").substr(3, 4);
        // console.log(no);
        $(".at").hide();
        $(".at"+no).show();
    })
})