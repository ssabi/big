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
    var speed = 250;
    var defaultPos = 10;

    $(window).on({
        scroll : function(){
            var scrollTop = $(this).scrollTop();
            //console.log("scrollTop = "+scrollTop);

            if(scrollTop >= leftOffsetTop - 10){
                //$leftSide.addClass("fixed");
                //$leftSide.css("top", scrollTop - leftOffsetTop + 20 + "px");
                $leftSide.stop().animate({"top" : scrollTop - leftOffsetTop + 20}, speed);
            }else{
                //$leftSide.removeClass("fixed");
                //$leftSide.css("top", "10px");
                $leftSide.stop().animate({"top" : defaultPos}, speed);
            }
            if(scrollTop >= rightOffsetTop - 10){
                //$rightSide.addClass("fixed");
                //$rightSide.css("top", scrollTop - rightOffsetTop + 20  + "px");
                $rightSide.stop().animate({"top" : scrollTop - rightOffsetTop + 20}, speed);
            }else{
                //$rightSide.removeClass("fixed");
                //$rightSide.css("top", "10px");
                $rightSide.stop().animate({"top" : defaultPos}, speed);
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
