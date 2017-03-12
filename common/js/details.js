/**
 * Created by yuanbo on 2017/3/12.
 */
//初始化标题
/*case
 FRACTAL DESIGN WORKS
* <h1 class="showtit act">
*     <i>c</i><i>A</i><i>S</i><i>E</i>
* </h1>
* <p class="showtit act">
*     <i></i><i></i><i></i><i></i><i></i>
* </p>
* */
function titInit(t) {
    //t需是JQ对象
    $(t).addClass('showtit');
    var txt = $(t).text();
    txt = txt.replace(/ /g,"^");
    var arr = txt.split("");
    var str ='';
    $.each(arr,function (i,e) {
        str+='<i style="transition-delay:0.'+randomNum(1,7)+'s;-webkit-transition-delay:0.'+randomNum(1,7)+'s;">'+e+'</i>';
    })
    str=str.replace(/\^/g,"&nbsp;");
    $(t).html(str);
}

//激活标题
function actTit(e,delay) {
    setTimeout(function(){
        $(e).addClass("act");
    },delay);
}
