/**
 * Created by yuanbo on 2017/3/12.
 */
//x-y随机整数
function randomNum(x,y) {
   return  Math.round(Math.random()*(y-x)+x)
}


//font-size:
function htmlsize(){
    var ww;
    var maxw=640;
    var minw=320;
    if($(window).width()>maxw){ww=maxw;}
    else if($(window).width()<minw){ww=minw;}
    else{
        ww=$(window).width();
    }
    $("html").css({fontSize:(ww/maxw)*100});
}
htmlsize();

$(window).resize(htmlsize);


$(".menu").click(function(event){
    $(this).toggleClass("act");
    $(".header .r").toggleClass("act");
    $(".nav_main").toggleClass("show");
    event.stopPropagation();
});
$(".nav_main").click(function(event){
    event.stopPropagation();
});
$(window).click(function(){
    $(".menu").removeClass("act");
    $(".header .r").removeClass("act");
    $(".nav_main").removeClass("show");
});

if($(window).width()>=1440){
    $("#main").css({height:$("body").height()-(82+parseInt($(".footer").css("padding-top"))*2)});
}
else{

    $("#main").css({height:$("body").height()-parseInt($("body").css("padding-top"))});
    $("#main").css('height','100')
}
$(window).resize(function(){
    if($(window).width()>=1440){
        $("#main").css({height:$("body").height()-(82+parseInt($(".footer").css("padding-top"))*2)});
    } else{

        $("#main").css({height:$("body").height()-parseInt($("body").css("padding-top"))});
    }
});