var $html = $("html");
$(document).ready(function(){
    //Left Side, Right Side
    var $leftSide = $("#left_side");
    var $rightSide = $("#right_side");
    var $header = $("#header");
    var $headerHeight = $header.length > 0 ? $header.outerHeight() : 0;
    var $visual = $(".visual_section");
    var $visualHeight = $visual.length > 0 ? $visual.outerHeight() : 0;
    var $btnToTop = $("#to_top");
    var $scrollTop = $(window).scrollTop();
    if($scrollTop > $visualHeight + $headerHeight - 20){
        $leftSide.addClass("fixed");
        $rightSide.addClass("fixed");
    }else{
        $leftSide.removeClass("fixed");
        $rightSide.removeClass("fixed");
    }
    $leftSide.show();
    $rightSide.show();

    $leftSide.css("top", $visualHeight);
    $rightSide.css("top", $visualHeight);

    $(window).on({
        scroll : function(){
            var scrollTop = $(window).scrollTop();

            if(scrollTop >= $visualHeight + $headerHeight - 20){
                $leftSide.addClass("fixed");
                $rightSide.addClass("fixed");
            }else{
                $leftSide.removeClass("fixed");
                $rightSide.removeClass("fixed");
            }
        }
    });
    $btnToTop.on({
        click : function(e){
            e.preventDefault();

            $("html, body").stop().animate({scrollTop : 0}, 300);
        }
    });

    //Tab
    var tab_wrap = ".tab_wrap";
    var tab_con = ".tab_con";
    var tab_con_wrap = ".tab_con_wrap";
    if($(tab_wrap).length > 0){
        if($(tab_con_wrap).length > 0){
            var tabConSwiper = $(tab_con_wrap).slick({
                infinite: false,
                speed : 150
            });

            tabConSwiper.on("afterChange", function(e, s, i){
                var idx = i;

                var $tab_list = $(e.target).closest(tab_wrap).find(" > .tab_list > ul > li");
                $tab_list.eq(idx).addClass("acc_color").siblings("li").removeClass("acc_color");
            });
        }

        $(tab_wrap).each(function(){
            var data = $(this).data("action");
            //hover, move, click
            var $tab_list = $(this).find(" > .tab_list > ul > li");

            if(data == "hover"){
                $tab_list.off("click").on({
                    mouseenter : function(e){
                        e.preventDefault();

                        if($(this).closest(tab_wrap).find(tab_con_wrap).length > 0){
                            swiper_control($(this));
                        }else{
                            tab_control($(this));
                        }
                    }
                });
            }else{
                $tab_list.on({
                    click : function(e){
                        if(data != "move"){
                            e.preventDefault();
                        }

                        if($(this).closest(tab_wrap).find(tab_con_wrap).length > 0){
                            swiper_control($(this));
                        }else{
                            tab_control($(this));
                        }
                    }
                });
            }
        });
        var tab_control = function(ele){
            var $this = $(ele);

            var idx = $this.index();
            var tabCon = $this.closest(tab_wrap).find(" > " + tab_con);

            $this.addClass("acc_color").siblings("li").removeClass("acc_color");
            tabCon.eq(idx).addClass("current").siblings(tab_con).removeClass("current");
        }
        var swiper_control = function(ele){
            var $this = $(ele);
            /*
            tabConSwiper.on("afterChange", function(e, s, i){
                var idx = i;

                var $tab_list = $this.closest(tab_wrap).find(" > .tab_list > ul > li");
                $tab_list.eq(idx).addClass("acc_color").siblings("li").removeClass("acc_color");
            });
            */

            var idx = $this.index();
            $this.addClass("acc_color").siblings("li").removeClass("acc_color");

            tabConSwiper.slick('slickGoTo', idx);
            tabCon = $this.closest(tab_wrap).find(" .slick-slide " + tab_con);
            tabCon.removeClass("current");
            tabCon.eq(idx).addClass("current");
        }
    }

    //Swiper

    //국산차
    /*
    var recom_d_ele = ".recom_wrap.domestic .swiper-container";
    var recom_d_nav_next = ".recom_wrap.domestic .swiper-button-next";
    var recom_d_nav_prev = ".recom_wrap.domestic .swiper-button-prev";
    var recom_d_pagination = ".recom_wrap.domestic .swiper-pagination";
    var $btnDomesticCtrl = $(".recom_wrap.domestic .swiper-play-pause");
    var recom_d_swiper = new Swiper (recom_d_ele, {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 20,
        autoplay:{
            delay: 5000
        },
        loop: true,
        navigation: {
            nextEl: recom_d_nav_next,
            prevEl: recom_d_nav_prev,
        },
        pagination: {
            el: recom_d_pagination,
            type: 'fraction'
        }
    });
    $btnDomesticCtrl.off("click").on({
        "click" : function(){
            if($(this).hasClass("on")){
                $(this).removeClass("on");
                recom_d_swiper.autoplay.start();
            }else{
                $(this).addClass("on");
                recom_d_swiper.autoplay.stop();
            }
        }
    });
    */

    //수입차
    /*
    var recom_i_ele = ".recom_wrap.import .swiper-container";
    var recom_i_nav_next = ".recom_wrap.import .swiper-button-next";
    var recom_i_nav_prev = ".recom_wrap.import .swiper-button-prev";
    var recom_i_pagination = ".recom_wrap.import .swiper-pagination";
    var $btnImportCtrl = $(".recom_wrap.import .swiper-play-pause");
    var recom_i_swiper = new Swiper (recom_i_ele, {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 20,
        autoplay:{
            delay: 5000
        },
        loop: true,
        navigation: {
            nextEl: recom_i_nav_next,
            prevEl: recom_i_nav_prev,
        },
        pagination: {
            el: recom_i_pagination,
            type: 'fraction'
        }
    });
    $btnImportCtrl.off("click").on({
        "click" : function(){
            if($(this).hasClass("on")){
                $(this).removeClass("on");
                recom_i_swiper.autoplay.start();
            }else{
                $(this).addClass("on");
                recom_i_swiper.autoplay.stop();
            }
        }
    });
    */

    /*
    var review_ele = ".review_wrap .swiper-container";
    var review_nav_next = ".review_wrap .swiper-button-next";
    var review_nav_prev = ".review_wrap .swiper-button-prev";
    var review_swiper = new Swiper (review_ele, {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
            nextEl: review_nav_next,
            prevEl: review_nav_prev,
        }
    });
    */

    //국산차
    var domestic_ele = ".domestic";
    var domestic_swiper_ele = $(domestic_ele).find(".swiper");
    var domestic_swiper = $(domestic_swiper_ele).slick({
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 250,
        slidesToShow: 4,
        slidesToScroll: 4,
        variableWidth: true
    });
    if($(domestic_ele).length > 0){
        var optShow = domestic_swiper.slick("slickGetOption", "slidesToShow");
        var listLen = $(domestic_swiper_ele).find(".slick-slide").not(".slick-cloned").length;
        var totalCnt = Math.round(listLen / optShow);
        var $dtargetTotal = $(domestic_ele).find(".swiper-pagination .total");
        var $dtargetCurrent = $(domestic_ele).find(".swiper-pagination .current");
        $dtargetTotal.html(totalCnt);
        $dtargetCurrent.html("1");

        domestic_swiper.on("afterChange", function(event, slider, idx){
            var current = (idx / optShow) + 1;
            $dtargetCurrent.html(current);
        });

        var $dBtnCtrl = $(domestic_ele).find(".swiper-play-pause");
        $dBtnCtrl.on({
            click : function(){
                var hasClass = $(this).hasClass("on");
                if(hasClass){
                    domestic_swiper.slick("slickPlay");
                    $(this).removeClass("on");
                }else{
                    domestic_swiper.slick("slickPause");
                    $(this).addClass("on");
                }
            }
        });
    }

    //수입차
    var import_ele = ".import";
    var import_swiper_ele = $(import_ele).find(".swiper");
    var import_swiper = $(import_swiper_ele).slick({
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 250,
        slidesToShow: 4,
        slidesToScroll: 4,
        variableWidth: true
    });
    if($(import_ele).length > 0){
        var optShow = import_swiper.slick("slickGetOption", "slidesToShow");
        var listLen = $(import_swiper_ele).find(".slick-slide").not(".slick-cloned").length;
        var totalCnt = Math.round(listLen / optShow);
        var $itargetTotal = $(import_ele).find(".swiper-pagination .total");
        var $itargetCurrent = $(import_ele).find(".swiper-pagination .current");
        $itargetTotal.html(totalCnt);
        $itargetCurrent.html("1");
        import_swiper.on("afterChange", function(event, slider, idx){
            var current = (idx / optShow) + 1;
            $itargetCurrent.html(current);
        });

        var $iBtnCtrl = $(import_ele).find(".swiper-play-pause");
        $iBtnCtrl.on({
            click : function(){
                var hasClass = $(this).hasClass("on");
                if(hasClass){
                    import_swiper.slick("slickPlay");
                    $(this).removeClass("on");
                }else{
                    import_swiper.slick("slickPause");
                    $(this).addClass("on");
                }
            }
        });
    }

    //고객만족후기 Swiper Type01
    var recom_swiper_ele1 = ".review_wrap .swiper";
    var recom_swiper1 = $(recom_swiper_ele1).slick({
        infinite: false,
        dots: false,
        speed: 250,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true
    });

    //고객만족후기 Swiper Type02
    var recom_swiper_ele2 = ".recom_swiper";
    var recom_swiper2 = $(recom_swiper_ele2).slick({
        infinite: false,
        dots: true,
        speed: 250,
        slidesToShow: 5,
        slidesToScroll: 5,
        //variableWidth: true
    });

    //Range
    var custom_values = [0, 200, 400, 600, 1000, 1500, 3000, 4000];
    var $range_ele = $(".js-range-slider");
    var $inputFrom = $(".range_from");
    var $inputTo = $(".range_to");
    var $btnReset = $(".range_wrap .btn_reset");
    var min = 0, max = 4000, from = 0, to = 400, step = 100;
    var instance = $range_ele.ionRangeSlider({
        skin: "round",
        type: "double",
        grid: false,
        min: min,
        max: max,
        from: from,
        to: to,
        grid_num: 8,
        step: step,
        hide_min_max: true,
        hide_from_to: true,
        //values: custom_values,
        grid_snap: false,
        onStart: updateInputs,
        onChange: updateInputs,
        onFinish: updateInputs
    });
    instance = $range_ele.data("ionRangeSlider");
    function updateInputs(data){
        var from = data.from;
        var to = data.to;

        var fromTxt = "만원";
        var toTxt = "만원";
        if(from == 0){
            fromTxt = "원";
        }
        if(to == 0){
            toTxt = "원";
        }

        $inputFrom.prop("value", from + fromTxt);
        $inputTo.prop("value", to + toTxt);
    }
    $inputFrom.on({
        change : function(){
            var val = $(this).prop("value");

            // validate
            if (val < min) {
                val = min;
            } else if (val > to) {
                val = to;
            }

            instance.update({
                from: val
            });

            var fromTxt = "만원";
            if(val == 0){
                fromTxt = "원";
            }

            $(this).prop("value", val + fromTxt);
        }
    });
    $inputTo.on({
        change : function(){
            var val = $(this).prop("value");

            // validate
            if (val < from) {
                val = from;
            } else if (val > max) {
                val = max;
            }

            instance.update({
                to: val
            });

            var toTxt = "만원";
            if(val == 0){
                toTxt = "원";
            }

            $(this).prop("value", val + toTxt);
        }
    });
    //Reset Range
    $btnReset.on({
        click : function(){
            instance.update({
                from: from,
                to: to
            });
            $inputFrom.prop("value", from + "원");
            $inputTo.prop("value", to + "만원");
        }
    });

    //검색
    var resultWrap = ".result_wrap";
    var $btnMFList = $(".manufacturer_list > li");
    var targetBox1 = ".result_inner.step01";
    var targetBox2 = ".result_inner.step02";
    var targetBox3 = ".result_inner.step03";
    var btnCtrl1 = ".btn_select.step01";
    var btnCtrl2 = ".btn_select.step02";
    var btnCtrl3 = ".btn_select.step03";

    $(btnCtrl1).on({
        click : function(){
            var $this = $(this);

            if($this.hasClass("active")){
                $this.closest(tab_con).find(targetBox1).slideUp(250);
                $this.removeClass("active");
            }else{
                $this.closest(tab_con).find(targetBox1).slideDown(250);
                $this.closest(tab_con).find(targetBox2).slideUp(250);
                $this.closest(tab_con).find(targetBox3).slideUp(250);

                $(this).closest(tab_con).find(btnCtrl1).siblings("button").removeClass("active");

                $this.addClass("active");
            }
        }
    });

    $(btnCtrl2).on({
        click : function(){
            var $this = $(this);

            if($this.closest(tab_con).find(resultWrap).find(".on").length == 0){
                $this.closest(tab_con).find(targetBox1).slideDown(250);
                $(this).closest(tab_con).find(btnCtrl1).addClass("active");
            }

            if($this.closest(tab_con).find(targetBox1).hasClass("on")){
                if($this.hasClass("active")){
                    $this.closest(tab_con).find(targetBox2).slideUp(250);
                    $this.removeClass("active");
                }else{
                    $this.closest(tab_con).find(targetBox2).slideDown(250);
                    $this.closest(tab_con).find(targetBox1).slideUp(250);
                    $this.closest(tab_con).find(targetBox3).slideUp(250);

                    $(this).closest(tab_con).find(btnCtrl2).siblings("button").removeClass("active");

                    $this.addClass("active");
                }
            }else{
                
            }
        }
    });
    $(btnCtrl3).on({
        click : function(){
            var $this = $(this);

            if($this.closest(tab_con).find(resultWrap).find(".on").length == 0){
                $this.closest(tab_con).find(targetBox1).slideDown(250);
                $(this).closest(tab_con).find(btnCtrl1).addClass("active");
            }

            if($this.closest(tab_con).find(targetBox1).hasClass("on") && $this.closest(tab_con).find(targetBox2).hasClass("on")){
                if($this.hasClass("active")){
                    $this.closest(tab_con).find(targetBox3).slideUp(250);
                    $this.removeClass("active");
                }else{
                    $this.closest(tab_con).find(targetBox3).slideDown(250);
                    $this.closest(tab_con).find(targetBox1).slideUp(250);
                    $this.closest(tab_con).find(targetBox2).slideUp(250);

                    $(this).closest(tab_con).find(btnCtrl3).siblings("button").removeClass("active");

                    $this.addClass("active");
                }
            }
        }
    });

    $btnMFList.on({
        click : function(e){
            e.preventDefault();

            var $eleTxt = $(this).text();

            $(this).closest(tab_con).find(btnCtrl1).text($eleTxt).addClass("on").removeClass("active");
            $(this).closest(tab_con).find(btnCtrl2).siblings("button").removeClass("active");
            $(this).closest(tab_con).find(targetBox1).addClass("on").slideUp(250);
            $(this).closest(tab_con).find(targetBox2).slideDown(250);
        }
    });
    $(targetBox2).find("> ul > li").on({
        click : function(e){
            e.preventDefault();

            var $eleTxt = $(this).text();
            $(this).closest(tab_con).find(btnCtrl2).text($eleTxt).addClass("on").removeClass("active");
            $(this).closest(tab_con).find(btnCtrl2).siblings("button").removeClass("active");

            $(this).closest(tab_con).find(targetBox2).addClass("on").slideUp(250);
            $(this).closest(tab_con).find(targetBox3).slideDown(250);
        }
    });
    $(targetBox3).find("> ul > li").on({
        click : function(e){
            e.preventDefault();

            var $eleTxt = $(this).text();
            $(this).closest(tab_con).find(btnCtrl3).text($eleTxt).addClass("on").removeClass("active");
            $(this).closest(tab_con).find(btnCtrl2).siblings("button").removeClass("active");
            $(this).closest(tab_con).find(targetBox3).addClass("on").slideUp(250);
        }
    });
});