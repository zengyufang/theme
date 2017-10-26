$(function(){
    var ulLi = $("#menuUL").children("li");
    ulLi.each(function(index){
        $(this).on("click",function(){
            if(index == 0){
                $(this).find("a.menu_a").attr("href","index.html");
                $("#indexMain").show();
                $("#iframe").remove();
            }else if($(this).children().length>1){
                var menu = "menu"+index;
                $(this).children(".menu_div").find("a.menu_a").attr("href","#"+menu);
                $(this).children(".collapse").attr("id",menu);
            }else{
                $(this).find("a.menu_a").attr("href","index.html");
            }
        })
        $(this).children(".collapse").children("ul").children("li").each(function(){
            
            $(this).on("click",function(){
                var url = $(this).children("a").attr("data-url");
                var iframe = '<iframe id="iframe" src="./'+url+'" style="width:100%;height:100%;border:none;"></iframe>';
                $("#indexMain").hide();
                $("#indexMain").after(iframe);
            })
        })
    })
})