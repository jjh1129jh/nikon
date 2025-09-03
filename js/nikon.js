$(function(){
    // 보여지는 배너를 체크할 변수만들기
    var currentSlide = 0;
    var slides = $(".akaBanner li");
    var totalSlides = slides.length;
    var slideInterval = 4000;
    var timer;
    // 첫번째 배너를 복사하여 배너의 마지막에 붙이기
    // 첫 배너 복제 (무한 루프용)
    var obj = $(".mainbanner>.mb1").clone();
    $(".mainbanner").append(obj);

    function moveBanner(){
        $(".mainbanner").stop(true,true).animate({
            marginLeft: -showBanner * 100 + "%"
        }, 1000);

        // 버튼 색상 동기화
        if(showBanner == 5){
            $(".mBtn>li").eq(0).addClass("active").siblings().removeClass("active");
        } else{
            $(".mBtn>li").eq(showBanner).addClass("active").siblings().removeClass("active");
        }
    }
    //버튼을 클릭하면 배너가 해당하는 위치로 이동하고, 버튼에 active클래스 추가하기
    $(".mBtn>li").click(function(){
        showBanner = $(this).index();
        moveBanner();

        // 클릭하면 타이머 초기화
        startTimer();
    });

    $(".rightBtn").click(function () {
        if (showBanner == 4) {
            showBanner = -1;
            $(".mainbanner").css("margin-left", 0);
        }
        showBanner++;
        moveBanner();
    });

    $(".leftBtn").click(function () {
        if (showBanner == 0) {
            showBanner = 5;
            $(".mainbanner").css("margin-left", -100 * showBanner + "%");
        }
        showBanner--;
        moveBanner();
    });

    //메인배너를 자동으로 넘길 함수
    function autoBanner(){
        showBanner++;
        if(showBanner > 4) showBanner = 0; // 마지막 배너이면 처음으로
        moveBanner();
    }
    function startTimer(){
        clearInterval(timer);
        timer = setInterval(autoBanner, 4000);
    }

    startTimer();

    $("#main").hover(
        function(){ clearInterval(timer); },
        function(){ startTimer(); }
    );
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
    function goToSlide(index) {
        currentSlide = index;
        $(".akaBanner").css("transform", "translateX(-" + (100 * currentSlide) + "%)");
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        goToSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        goToSlide(currentSlide);
    }
    function startAkaTimer() {
    akaTimer = setInterval(nextSlide, slideInterval);
    }
    
    function resetAkaTimer() {
        clearInterval(akaTimer);
        startAkaTimer();
    }
    $(".btnR").click(function() {
        nextSlide();
        resetAkaTimer();
    });
    $(".btnL").click(function() {
        prevSlide();
        resetAkaTimer();
    });

    
    // 초기화
    startAkaTimer();
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

