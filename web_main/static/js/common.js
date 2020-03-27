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
                //$leftSide.addClass("fixed");
                $leftSide.css("top", scrollTop - leftOffsetTop + 20 + "px");
            }else{
                //$leftSide.removeClass("fixed");
                $leftSide.css("top", "10px");
            }
            if(scrollTop >= rightOffsetTop - 10){
                //$rightSide.addClass("fixed");
                $rightSide.css("top", scrollTop - rightOffsetTop + 20  + "px");
            }else{
                //$rightSide.removeClass("fixed");
                $rightSide.css("top", "10px");
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