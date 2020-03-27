$(document).ready(function(){
    //Menu Open/Close
    var $html = $("html");
    var $btnOpen = $(".open_menu");
    var $btnClose = $(".close_menu");
    var $navigation = $(".navigation");
    var $dimmed = $(".navigation .dimmed");

    $btnOpen.on({
        click : function(e){
            e.preventDefault();

            //$navigation.addClass("open");
            $dimmed.fadeIn();
            $navigation.stop().animate({left:"0"}, 300, function(){
                $html.addClass("ovf");
            });
        }
    });
    $btnClose.on({
        click : function(e){
            e.preventDefault();

            $navigation.stop().animate({left:"100%"}, 300, function(){
                $dimmed.fadeOut();
                $html.removeClass("ovf");
            });
        }
    });
    $dimmed.on({
        click : function(e){
            e.preventDefault();

            $navigation.stop().animate({left:"100%"}, 300, function(){
                $dimmed.fadeOut();
                $html.removeClass("ovf");
            });
        }
    });

    //Visual Swiper
    var visual_ele = ".visual .swiper";
    var visual_swiper = $(visual_ele).slick({
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 250,
        arrows: false,
        dots: true
    });
});