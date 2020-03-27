$(document).ready(function(){
    //Visual Swiper
    var visual_ele = ".visual_sec .swiper";
    var visual_swiper = $(visual_ele).slick({
        arrows: false,
        dots: true
    });

    //Left Side, Right Side
    var $html = $("html, body");
    var $leftSide = $("#left_side");
    var $rightSide = $("#right_side");
    var leftOffsetTop = $leftSide.length > 0 ? $leftSide.offset().top : 0;
    var rightOffsetTop = $rightSide.length > 0 ? $rightSide.offset().top : 0;

    $(window).on({
        scroll : function(){
            var scrollTop = $(this).scrollTop();
            //console.log("scrollTop = "+scrollTop);

            console.log("scrollTop = "+scrollTop);
            console.log("leftOffsetTop = "+leftOffsetTop);

            if(scrollTop >= leftOffsetTop - 10){
                $leftSide.addClass("fixed");
            }else{
                $leftSide.removeClass("fixed");
            }
            if(scrollTop >= rightOffsetTop - 10){
                $rightSide.addClass("fixed");
            }else{
                $rightSide.removeClass("fixed");
            }
        }
    });

    //To Top
    var $btnToTop = $("#totop");
    $btnToTop.on({
        click : function(e){
            e.preventDefault();

            $html.stop().animate({"scrollTop": 0}, 250);
        }
    });
});