$(window).scroll((function(){$(window).scrollTop()>500?$("#rocket").addClass("show"):$("#rocket").removeClass("show")})),$("#rocket").click((function(){return $("#rocket").addClass("launch"),$("html, body").animate({scrollTop:0},500,(function(){$("#rocket").removeClass("show launch")})),!1}));