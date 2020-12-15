$(document).ready(function(){
    var x=10;
    var y=20;
    $("article .l_box .wdxc  ul li a").mouseover(function(e){

        //创建显示大图的div
        var tooltip="<div id='tooltip'><img src='"+this.href+"' alt='产品预览图'/></div>";
        $("body").append(tooltip);
        //给创建的div一个初始的位置信息
        $("#tooltip").css({"top": (e.pageY+y)+"px","left": (e.pageX+x)+"px"}).show("fast");
        $(this).click(function(){return false;});
    }).mouseout(function(){
        //移除上述代码创建的div
        $("#tooltip").remove();
    }).mousemove(function(e){
        //使创建的大图div随着鼠标移动
        $("#tooltip").css({"top":(e.pageY+y)+"px","left":(e.pageX+x)+"px"});
    });
});