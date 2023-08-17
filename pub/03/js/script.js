$(".gnb li").hover(
    function(){
        $(this).find(".sub").stop().slideDown();
    },
    function(){
        $(this).find(".sub").stop().slideUp();
    }
);
// 2
// $(".tab li:eq(0) a").click();
// eq(0)은 첫번째란 뜻임 nth-child랑 같은 거
$(".tab1").click(
    function(){
        $(".notice").show();
        $(".gallery").hide();
    }
);
$(".tab2").click(
    function(){
        $(".gallery").css("display","flex");
        $(".notice").hide();
    }
);
$(".open").click(
    function(){
        $("#popup").fadeIn();
    }
);
$(".close").click(
    function(){
        $("#popup").fadeOut();
    }
);