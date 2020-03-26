var $html = $("html");
$(document).ready(function(){
    //Menu Open/Close
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

    //Tab
    var $tabWrap = $(".tab_wrap");
    var $tabList = $tabWrap.find(".tab_list li");
    $tabList.on({
        "click" : function(e){
            var data = $(this).data("link");
            if(!data){
                e.preventDefault();
            }

            $(this).addClass("current").siblings().removeClass("current");
            var idx = $(this).index();

            var $parents = $(this).parents(".tab_wrap");

            $parents.find(".tab_box").eq(idx).addClass("current").siblings(".tab_box").removeClass("current");
        }
    });

    //비주얼 Swiper Type01
    var visual_ele = ".visual_area .swiper-container";
    var visual_pagination = ".visual_area .swiper-pagination";
    var visual_swiper = new Swiper (visual_ele, {
        autoplay:{
            delay: 5000,
            disableOnInteraction: false
        },
        loop: true,
        pagination: {
            el: visual_pagination
        }
    });

    //비주얼 Swiper Type02
    var swiper_thumbs = ".swiper-container.thumbs";
    var swiper_visual = ".swiper-container.visual";
    if($(swiper_thumbs).length > 0 && $(swiper_visual).length > 0){
        var galleryThumbs = new Swiper(swiper_thumbs, {
            centeredSlides: true,
            spaceBetween: 10,
            slidesPerView: 4,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            slideToClickedSlide: true
        });
        var galleryTop = new Swiper(swiper_visual, {
            spaceBetween: 0,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
            /*,
            thumbs: {
                swiper: galleryThumbs
            }
            */
        });
        galleryTop.controller.control = galleryThumbs;
        galleryThumbs.controller.control = galleryTop;
    }
    //End 비주얼 Swiper Type02


    //매물 (신규/추천) Swiper - Type01 Column2
    var recomm_two_ele = ".recomm_swiper.type01 .swiper-container";
    var recomm_two_pagination = ".recomm_swiper.type01 .swiper-pagination";
    var recomm_two_swiper = new Swiper (recomm_two_ele, {
        slidesPerView: 2,
        spaceBetween: 0,
        pagination: {
            el: recomm_two_pagination
        }
    });

    //매물 (신규/추천) Swiper - Type01 Column3
    var recomm_three_ele = ".recomm_swiper.type02 .swiper-container";
    var recomm_three_pagination = ".recomm_swiper.type02 .swiper-pagination";
    var recomm_three_swiper = new Swiper (recomm_three_ele, {
        slidesPerView: 3,
        spaceBetween: 0,
        pagination: {
            el: recomm_three_pagination
        }
    });

    //빠른검색 Swiper
    /*
    var quick_search_ele = ".car_swiper_area .swiper-container";
    var quick_search_pagination = ".car_swiper_area .swiper-pagination";
    var quick_search_swiper = new Swiper(quick_search_ele, {
        slidesPerView: 'auto',
        spaceBetween: 0,
        pagination: {
            el: quick_search_pagination
        }
    });
    */

    //Tab Ext
    var $tabExtList = $(".tab_wrap_ext .tab_list li");
    $tabExtList.on({
        "click" : function(e){
            e.preventDefault();

            $(this).addClass("current").siblings().removeClass("current");
            var idx = $(this).index();

            var $parents = $(this).parents(".tab_wrap_ext");

            $parents.find(".tab_box").eq(idx).addClass("current").show().siblings(".tab_box").removeClass("current").hide();
        }
    });
    //$tabExtList.eq(0).trigger("click");

    //빠른검색 Swiper - 아래 코드로 대체
    var car_swiper = ".car_swiper_area";
    var maxLenCarSwiper = $(car_swiper).length;
    $(car_swiper).each(function(idx){
        var quick_search_ele = $(this).find(" .swiper-container");
        var quick_search_pagination = $(this).find(" .swiper-pagination");

        quick_search_swiper = new Swiper(quick_search_ele, {
            slidesPerView: 'auto',
            spaceBetween: 0,
            pagination: {
                el: quick_search_pagination
            },
            on: {
                "init" : function(){
                    if(idx == (maxLenCarSwiper -1)){
                        $tabExtList.eq(0).trigger("click");
                    }
                }
            }
        });
    });

    //상세페이지
    var detail_ele = ".view_swiper .swiper-container";
    var detail_swiper = new Swiper(detail_ele, {
        slidesPerView: 'auto',
        spaceBetween: 0,
        centeredSlides: true
    });

    // Accordion
    var accordion = ".accordion_wrap";
    var accordionItem = ".accord_item";
    var accordionCon = ".ac_con";
    var $accordionItemHd = $(accordion).find(".ac_tit");
    $accordionItemHd.on({
        click : function(e){
            e.preventDefault();

            $(this).parents(accordionItem).toggleClass("open").siblings(".ac_tit").removeClass("open");
            $(this).parents(accordionItem).find(accordionCon).slideToggle(300);
        }
    });
    if($(accordion).length > 0){
        if($(accordion).find(".open").length > 0){
            $(accordion).find(".open").find(".ac_con").show();
        }
    }

    //모든 옵션보기
    var $btnOptOpen = $(".btn_open_opt");
    var $btnOptClose = $(".btn_close_opt")
    var $targetOptBox = $(".all_opt_box");
    $btnOptOpen.on({
        click : function(){
            $("html, body").addClass("ovf");
            $targetOptBox.stop().show().animate({top:'27.6vw'}, 300, function(){//37.87vw
                $(this).attr("tabIndex", 0).focus();
            });
        }
    });
    $btnOptClose.on({
        click : function(){
            $targetOptBox.stop().animate({top:'100%'}, 300, function(){
                $("html, body").removeClass("ovf");
                $btnOptOpen.attr("tabIndex", 0).focus();
                $targetOptBox.hide();
            });
        }
    });

    //List Type
    var $btnListType = $(".btn_list_type");
    var $targetListBox = $(".result_list");
    $btnListType.on({
        click : function(e){
            e.preventDefault();

            var type01_class = "type01";
            var type02_class = "type02";

            if($(this).hasClass(type01_class)){
                $(this).removeClass(type01_class).addClass(type02_class);
                $targetListBox.removeClass(type01_class).addClass(type02_class);
            }else{
                $(this).removeClass(type02_class).addClass(type01_class);
                $targetListBox.removeClass(type02_class).addClass(type01_class);
            }
            
        }
    });

    //더보기
    var $btnMore = $(".btn_more");
    var target_ele = ".hide_category";
    var more_txt = "더보기";
    var close_txt = "닫기";
    $btnMore.on({
        click : function(){
            if($(this).hasClass("open")){
                $(this).removeClass("open").find("em").text(more_txt);
                $(this).next(target_ele).hide();
            }else{
                $(this).addClass("open").find("em").text(close_txt);
                $(this).next(target_ele).show();
            }
        }
    });

    //빠른 상담
    var $btnQuick = $(".btn_quick");
    var $targetEle = $(".quick_consultation");
    $btnQuick.on({
        click : function(e){
            e.preventDefault();

            var offset_top = $targetEle.offset().top;
            $("html, body").stop().animate({"scrollTop" : offset_top}, 300);
        }
    });

    //직접입력
    var $btnDirect = $(".btn_direct");
    var $targetEleCol = $(".col_ext")
    $btnDirect.on({
        click : function(e){
            e.preventDefault();

            $btnDirect.toggleClass("on");
            $targetEleCol.slideToggle(200);
        }
    });

    //Modal
    var $btnOpenModal = $("[data-modal]");
    var modalBox = ".modal_box";
    $btnOpenModal.on({
        click : function(e){
            e.preventDefault();

            var modalId = $(this).data("modal");
            //console.log("modalId = "+modalId);
            $(modalId).fadeIn().find(modalBox).attr("tabIndex",0).focus();
            $("#wrap").attr("aria-hidden", true);

            $html.addClass("ovf");
            closeModal($(this));
        }
    });

    //상세검색 - 선택
    var $btnSelect = $(".btn_opt");
    var parentsEle = ".opt_box";
    var optBoxEle = ".detail_opt";
    $btnSelect.on({
        click : function(){
            var $target = $(this).closest(parentsEle).find(optBoxEle);
            $target.fadeIn(150, function(){
                /*
                $(document).on({
                    'mousedown touchstart focusin' : function(e){
                        if($(e.target).closest(optBoxEle).length === 0){
                            $target.fadeOut(150);
                        }
                    }
                });
                */
            });
        }
    });

    //상세검색 - 선택리스트
    var $selectList = $(optBoxEle).find(".mid_area a");
    $selectList.on({
        click : function(e){
            e.preventDefault();

            $(this).parent("li").addClass("on").siblings("li").removeClass("on");
        }
    });

    //상세검색 - 직접입력
    var $chkDirect = $(".chk_direct input");
    $chkDirect.on({
        click : function(){
            var checked = $(this).prop("checked");
            //console.log(checked);
            var $topEle = $(this).closest(optBoxEle).find(".top_area");
            var pTit = $topEle.find("p");
            var pInput = $topEle.find(".dir_ele");
            if(checked){
                pTit.hide();
                pInput.show();
            }else{
                pTit.show();
                pInput.hide();
            }
        }
    });

    //상세검색 - 전체선택
    var $btnAllChk = $(".all_chk input");
    var targetEle = ".ds_con";
    $btnAllChk.on({
        click : function(){
            var $target = $(this).closest(parentsEle).find(targetEle);

            var checked = $(this).prop("checked");
            if(checked){
                $target.find("input").prop("checked", true);
            }else{
                $target.find("input").prop("checked", false);
            }
        }
    });
});

function closeModal(ele){
    var $btnCloseModal = $(".modal_header .modal_close");
    $btnCloseModal.on({
        click : function(e){
            e.preventDefault();

            $html.removeClass("ovf");
            $("html").find(".modal_wrap").fadeOut();
            $("#wrap").removeAttr("aria-hidden");
            $(ele).attr("tabIndex", 0).focus();
        }
    });
}
/*
window.onload = function(){
    $(".tab_wrap_ext .tab_list li").eq(0).trigger("click");
}
*/