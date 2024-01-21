$(function(){
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

