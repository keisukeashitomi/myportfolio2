['use strict'];

{
  const $navmenu = $('header').find('.nav-menu');
  const $hamburgermenu = $navmenu.find('.hamburger-menu');
  const $menu = $navmenu.find('.menu');
  const $nav = $navmenu.find('.nav');
  const $sns = $navmenu.find('.sns');
  let clicked = false;
  $hamburgermenu.click(function() {
    if(clicked === false) {
      $navmenu.animate({'width':'360px'},2000);
      $nav.fadeIn(2000);
      $sns.animate({'marginTop':'40px','marginLeft':'150px'},2000);
    } else {
      $navmenu.animate({'width':'70px'},2000);
      $nav.fadeOut(2000);
      $sns.animate({'marginTop':'500px','marginLeft':'0'},2000);
    }
    clicked = !clicked;
  });

  $menu.click(function() {
    if(clicked === false) {
      $navmenu.animate({'width':'360px'},2000);
      $nav.fadeIn(2000);
      $sns.animate({'marginTop':'40px','marginLeft':'150px'},2000);
    } else {
      $navmenu.animate({'width':'70px'},2000);
      $nav.fadeOut(2000);
      $sns.animate({'marginTop':'500px','marginLeft':'0'},2000);
    }
    clicked = !clicked;
  });



 

  $(function() {
    $('.shopinfo').each(function() {
     
      var $slides = $(this).find('img'),
          slideNum = $slides.length,
          currentIdx = 0;
    
    
      $(".shopinfo img").eq(currentIdx).fadeIn();
    
    
      setTimeout(dispNextSlide, 2000);
    
      
      function dispNextSlide() {
        var nextIdx = currentIdx + 1;
    
      
        if (nextIdx > (slideNum - 1)) {
          nextIdx = 0;
        }
    
       
        $(".shopinfo img").eq(currentIdx).fadeOut();
    
        
        $(".shopinfo img").eq(nextIdx).fadeIn();
    
       
        currentIdx = nextIdx;
      }
    })
   })













}