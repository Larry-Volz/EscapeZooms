$(function (){

//----------------------------------------------------------------------------------------

    $("#mastermind-title").on("click",(e)=>{
        if($('#mastermind-blurb').css('display') == 'none'){
            $(".blurbs").slideUp()
            $("#mastermind-blurb").slideDown();
            mmShowHide = 0;
        } else {
            $(".blurbs").slideUp()
            $("#mastermind-blurb").slideUp();
            $("#games-blurb").slideDown();
            mmShowHide = 1;
        }
    })

    $("#anywhen-title").on("click",(e)=>{
        if($('#anywhen-blurb').css('display') == 'none'){
            $(".blurbs").slideUp()
            $("#anywhen-blurb").slideDown();
            awShowHide = 0;
        } else {
            $(".blurbs").slideUp()
            $("#anywhen-blurb").slideUp();
            $("#games-blurb").slideDown();
            awShowHide = 1;
        }
        console.log("anywhen clicked");
    })

    $("#p0-title").on("click",(e)=>{
        if($('#p0-blurb').css('display') == 'none'){
            $(".blurbs").slideUp()
            $("#p0-blurb").slideDown();
            awShowHide = 0;
        } else {
            $(".blurbs").slideUp()
            $("#p0-blurb").slideUp();
            $("#games-blurb").slideDown();
            awShowHide = 1;
        }
        console.log("p0 clicked");
    })

    $("#ele-title").on("click",(e)=>{
        if($('#ele-blurb').css('display') == 'none'){
            $(".blurbs").slideUp()
            $("#ele-blurb").slideDown();
            awShowHide = 0;
        } else {
            $(".blurbs").slideUp()
            $("#ele-blurb").slideUp();
            $("#games-blurb").slideDown();
            awShowHide = 1;
        }
        console.log("ele clicked");
    })



















})