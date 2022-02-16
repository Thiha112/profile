var count = 1;
function darkMode(){
    if(count%2 !== 0){
        $("#darkmode-icon").attr("src","images/darkmode_dark_ccexpress.png");
        $("body").css("background-color","#121212");
        $(".nav-link").css("color","white");
        $("body").css("color","white");
        $(".nav-tabs .nav-link").css("color","violet");
        $("#features").css("background-color","#555555");
        $(".servicetitle").css("color","#121212");
        $("#contact").css("background-color","#555555")
        $(".darkpara").css("color","#121212");
        $(".lightpara").css("color","#121212");
        $("#courses").css("background-color","#555555");
        
    }
    else{
        $("body").css("background-color","#E5FCFF");
        $("#darkmode-icon").attr("src","images/darkmode_light-removebg-preview.png");
        $(".nav-link").css("color","#121212");
        $("body").css("color","#121212");
        $(".nav-tabs .nav-link").css("color","violet");
        $("#features").css("background-color","white");
        $(".servicetitle").css("color","#121212");
        $("#contact").css("background-color","#FFFFFF")
        $(".darkpara").css("color","#121212");
        $(".lightpara").css("color","#121212");
        $("#courses").css("background-color","#DAF7E7");
    }
      count++;
}

$("#darkmode-icon").on("click",darkMode);
