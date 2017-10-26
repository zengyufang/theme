//大小菜单变化
$(function(){
    $("#icon_box").on("click",function(){
        if($(".head_wrap").hasClass("small_menu")){
            $(".head_wrap").removeClass("small_menu");
        }else{
            $(".head_wrap").addClass("small_menu");
        }
        if($(".main").hasClass("small_menu")){
            $(".main").removeClass("small_menu");
        }else{
            $(".main").addClass("small_menu");
        }
    })
})
//主题切换
$(function(){
    $("#setting_box").on("click",function(){
        if($(".setting_wrap").height() > 2){
            $(".setting_wrap").animate({"height":"0px"});
        }else{
            $(".setting_wrap").animate({"height":"400px"});
        }
    })
    $(".color_box").each(function(){
        $(this).on("click",function(){
            var aa = ($(this).attr("data-theme"));
            localStorage.setItem("theme",aa);
            $("#theme").attr("href","./styles/theme/"+aa+".css");
            if($(".setting_wrap").height() > 2){
                $(".setting_wrap").animate({"height":"0px"});
            }else{
                $(".setting_wrap").animate({"height":"400px"});
            }
        })
    })
})

