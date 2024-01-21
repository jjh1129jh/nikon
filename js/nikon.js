$(function(){
    // 보여지는 배너를 체크할 변수만들기
    var showBanner = 0;
    // 첫번째 배너를 복사하여 배너의 마지막에 붙이기
    // var obj = $(".mainbanner>.mb1").clone();
    // $(".mainbanner").append(obj);

    function moveBanner(){
        $(".mainbanner").stop().animate({
        // -n * 100%
        marginLeft : -showBanner * 100+"%"
        },1000)

        if(showBanner == 5){
            $(".mBtn>li").eq(0).addClass("active").siblings().removeClass("active");
        }
        else{
            $(".mBtn>li").eq(showBanner).addClass("active").siblings().removeClass("active");
        }
    }
    //버튼을 클릭하면 배너가 해당하는 위치로 이동하고, 버튼에 active클래스 추가하기
    $(".mBtn>li").click(function(){
        showBanner = $(this).index();
        console.log(showBanner);
        moveBanner();
    })

    $(".rightBtn").click(function(){
        console.log(showBanner);
        if(showBanner == 4){
            showBanner = -1;
            $(".banner").css("margin-left",0)
        }
        showBanner++;
        moveBanner();
    })
    $(".leftBtn").click(function(){
        console.log(showBanner);
        if(showBanner == 0){
            showBanner = 5;
            $(".banner").css("margin-left",-100*showBanner+"%");
        }
        showBanner--;
        moveBanner();
    })

    //메인배너를 자동으로 넘길 함수
    var obj = $(".mainbanner>.mb1").clone();
    $(".mainbanner").append(obj);

    function autoBanner(){
        if (showBanner == 5){
            showBanner = 0;
            $(".mainbanner").css("margin-left",0)
        }

        showBanner++;

        $(".mainbanner").stop().animate({
            marginLeft:-showBanner * 100 + "%"
        },1000)
    }

    var timer = setInterval(autoBanner,4000)
    $("#main").mouseenter(function(){
        clearInterval(timer);
    })
    $("#main").mouseleave(function(){
        timer = setInterval(autoBanner,4000)
    })

    //cright2 배너 체크할 변수
    var CrightBanner = 0;

    function CautoBanner(){
        if(CrightBanner<1){
            CrightBanner++;
        }else{
            CrightBanner=0;
        }
        $(".cright2>ul>li").eq(CrightBanner).fadeIn(1000).siblings().fadeOut(1000)
    }
    setInterval(CautoBanner,7000);

    //프로덕트 왼쪽 배너 체크할 변수
    var LShowBanner = 0;

    function LautoBanner(){
        console.log(LShowBanner);
        if (LShowBanner < 2) {
            LShowBanner++;
        } else{
            LShowBanner = 0;
        }
        $(".leftProduct>ul>li").eq(LShowBanner).fadeIn(1000).siblings().fadeOut(1000)
    }
    setInterval(LautoBanner,5000);

    //프로덕트 오른쪽 배너 체크할 변수
    var RShowBanner = 0;

    function RautoBanner(){
        console.log(RShowBanner);
        if (RShowBanner < 2) {
            RShowBanner++;
        } else{
            RShowBanner = 0;
        }
        $(".rightProduct>ul>li").eq(RShowBanner).fadeIn(1000).siblings().fadeOut(1000)
    }
    setInterval(RautoBanner,5000);

    //아카데미 배너 체크할 변수
    var akaBanner = 0;

    function LRbtnBanner(){
        $(".akaBanner").stop().animate({
            marginLeft: -akaBanner * 100 + "%"
        },1000)
    }
    
    
    //자식의 너비
    var liWidth = $(".akaBanner>li").outerWidth();
    //복사전 배너의 개수
    var liCount = $(".akaBanner>li").length;

    var objFirst = $(".akaBanner>li:lt(2)").clone();
    var objLast = $(".akaBanner>li:gt(1)").clone();
    $(".akaBanner").append(objFirst);
    $(".akaBanner").prepend(objLast);

    var count = $(".akaBanner>li").length;

    //부모의 너비
    var akaBanner = 0;
    $(".akaBanner").width(count * liWidth);
    //li의 너비
    $(".akaBanner>li").outerWidth(liWidth);

    $(".btnR").click(function(){
        if(akaBanner==4){
            akaBanner=0;
            $(".akaBanner").css("margin-left",0);
        }
        akaBanner++;
        LRbtnBanner();
    })
    $(".btnL").click(function(){
        if(akaBanner==0){
            akaBanner=4;
            $(".akaBanner").css("margin-left",-100*akaBanner+"%");
        }
        akaBanner--;
        LRbtnBanner();
    })

    function autoAkaBanner(){
        if (akaBanner == 4){
            akaBanner = 0;
            $(".akaBanner").css("margin-left",0)
        }

        akaBanner++;

        $(".akaBanner").stop().animate({
            marginLeft:-akaBanner * 100 + "%"
        },1000)
    }
    // var akatimer = setInterval(autoAkaBanner,4000)

    // $(".akaBannerWrap").mouseenter(function(){
    //     clearInterval(akatimer);
    // })
    // $(".akaBannerWrap").mouseleave(function(){
    //     akatimer = setInterval(autoAkaBanner,4000)
    // })

    //모바일 메뉴
    $("#Mnav>li").click(function(){
        //li 클릭시 toggleClass 적용

        $(this).children(".Msub").slideToggle(300);
        $(this).siblings().children(".Msub").slideUp(300);
    })

    //모바일 메뉴 호버
    $(".logo> span").click(function(){
        if($(this).hasClass("active")){
            $("#Mnav").stop().animate({
                left:"-100%"
            })
        }
        else{
            $("#Mnav").stop().animate({
                left:0
            })
            // $("#Mnav").css("left",0);
        }
    $(this).toggleClass("active")
    })

    $(".logo> span").hasClass("active")
    
    //서치메뉴
    $(".search>a").click(function(){
        if($(this).hasClass("searhover")){
            $(".searchpopup").css({
                opacity:0
            })
        }
        else{
            $(".searchpopup").css("opacity",1)
        }
    $(this).toggleClass("searhover")
    })

    // 언어 드롭다운 메뉴
    $(document).ready(function(e) {	         
        $("#sample").msDropdown(); 
    
    //no use
        try {
            var pages = $("#pages").msDropdown({on:{change:function(data, ui) {
                                                    var val = data.value;
                                                    if(val!="")
                                                        window.location = val;
                                                }}}).data("dd");
    
            var pagename = document.location.pathname.toString();
            pagename = pagename.split("/");
            pages.setIndexByValue(pagename[pagename.length-1]);
            $("#ver").html(msBeautify.version.msDropdown);
        } catch(e) {
            //console.log(e);	
        }
        
        $("#ver").html(msBeautify.version.msDropdown);	
        
    });
})

