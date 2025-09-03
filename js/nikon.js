$(function () {
    // 공통 변수
    var showBanner = 0;
    var currentSlide = 0;
    var akaTimer;
    var slideInterval = 4000;

    // ===== 메인 배너 =====
    var $mainBanner = $(".mainbanner");
    var $slides = $mainBanner.children("li");
    var totalMainSlides = $slides.length;

    // 첫 번째 배너 복제 → 마지막에 추가 (무한 루프용)
    var firstClone = $slides.first().clone();
    $mainBanner.append(firstClone);
    var totalWithClone = $mainBanner.children("li").length;

    function moveBanner() {
        $mainBanner.stop(true, true).animate({
            marginLeft: -showBanner * 100 + "%"
        }, 1000);

        // 버튼 active 처리
        var index = (showBanner === totalMainSlides) ? 0 : showBanner;
        $(".mBtn>li").eq(index).addClass("active").siblings().removeClass("active");
    }

    $(".mBtn>li").click(function () {
        showBanner = $(this).index();
        moveBanner();
        startTimer();
    });

    $(".rightBtn").click(function () {
        if (showBanner >= totalMainSlides) {
            showBanner = 0;
            $mainBanner.css("margin-left", 0);
        }
        showBanner++;
        moveBanner();
    });

    $(".leftBtn").click(function () {
        if (showBanner <= 0) {
            showBanner = totalMainSlides;
            $mainBanner.css("margin-left", -100 * showBanner + "%");
        }
        showBanner--;
        moveBanner();
    });

    function autoBanner() {
        showBanner++;
        if (showBanner > totalMainSlides) {
            showBanner = 1;
            $mainBanner.css("margin-left", 0);
        }
        moveBanner();
    }

    var timer;
    function startTimer() {
        clearInterval(timer);
        timer = setInterval(autoBanner, slideInterval);
    }

    startTimer();

    $("#main").hover(
        function () { clearInterval(timer); },
        function () { startTimer(); }
    );

    // ===== 오른쪽 cright2 배너 =====
    var CrightBanner = 0;
    function CautoBanner() {
        CrightBanner = (CrightBanner + 1) % $(".cright2>ul>li").length;
        $(".cright2>ul>li").eq(CrightBanner).fadeIn(1000).siblings().fadeOut(1000);
    }
    setInterval(CautoBanner, 7000);

    // ===== 프로덕트 왼쪽 배너 =====
    var LShowBanner = 0;
    function LautoBanner() {
        LShowBanner = (LShowBanner + 1) % $(".leftProduct>ul>li").length;
        $(".leftProduct>ul>li").eq(LShowBanner).fadeIn(1000).siblings().fadeOut(1000);
    }
    setInterval(LautoBanner, 5000);

    // ===== 프로덕트 오른쪽 배너 =====
    var RShowBanner = 0;
    function RautoBanner() {
        RShowBanner = (RShowBanner + 1) % $(".rightProduct>ul>li").length;
        $(".rightProduct>ul>li").eq(RShowBanner).fadeIn(1000).siblings().fadeOut(1000);
    }
    setInterval(RautoBanner, 5000);

    // ===== 아카데미 배너 =====
    var $akaSlides = $(".akaBanner li");
    var totalSlides = $akaSlides.length;

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
        clearInterval(akaTimer);
        akaTimer = setInterval(nextSlide, slideInterval);
    }

    $(".btnR").click(function () {
        nextSlide();
        startAkaTimer();
    });

    $(".btnL").click(function () {
        prevSlide();
        startAkaTimer();
    });

    startAkaTimer();

    // ===== 모바일 메뉴 =====
    $("#Mnav>li").click(function () {
        $(this).children(".Msub").slideToggle(300);
        $(this).siblings().children(".Msub").slideUp(300);
    });

    $(".logo> span").click(function () {
        if ($(this).hasClass("active")) {
            $("#Mnav").stop().animate({ left: "-100%" });
        } else {
            $("#Mnav").stop().animate({ left: 0 });
        }
        $(this).toggleClass("active");
    });

    // ===== 검색 메뉴 =====
    $(".search>a").click(function (e) {
        e.preventDefault();
        if ($(this).hasClass("searhover")) {
            $(".searchpopup").fadeOut(200);
        } else {
            $(".searchpopup").fadeIn(200);
        }
        $(this).toggleClass("searhover");
    });

    // ===== 언어 드롭다운 메뉴 =====
    try {
        $("#sample").msDropdown();

        var pages = $("#pages").msDropdown({
            on: {
                change: function (data, ui) {
                    var val = data.value;
                    if (val !== "") window.location = val;
                }
            }
        }).data("dd");

        var pagename = document.location.pathname.toString().split("/");
        pages.setIndexByValue(pagename[pagename.length - 1]);
        $("#ver").html(msBeautify.version.msDropdown);
    } catch (e) {
        console.log(e);
    }
});
