$(function () {
  

  
  $(window).scroll(function () {
    let scrTop = $(window).scrollTop();
    
    if (scrTop > 200) {
      $("header").addClass("menuFixed");
    } else {
      $("header").removeClass("menuFixed");
    }


    if(scrTop > 1377) {
        $(".backToTopBtn").fadeIn();
    } else{
        $(".backToTopBtn").fadeOut();
    }

  });

 
  $(".backToTopBtn").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
  

});



$(window).on("load", function () {
     $(".preloder").fadeOut();
   });
