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
      // スライド（画像）の数を取得
      var $slides = $(this).find('img'),
          slideNum = $slides.length,
          currentIdx = 0; // 何番目か
    
      // 最初の画像をフェードイン
      $(".shopinfo img").eq(currentIdx).fadeIn();
    
      // 3秒後に次のスライドを表示
      setTimeout(dispNextSlide, 2000);
    
      // 次のスライドを表示するメソッド
      function dispNextSlide() {
        var nextIdx = currentIdx + 1;
    
        // 最後のスライドの場合ははじめに戻る
        if (nextIdx > (slideNum - 1)) {
          nextIdx = 0;
        }
    
        // 現在のスライドをフェードアウト
        $(".shopinfo img").eq(currentIdx).fadeOut();
    
        // 次のスライドをフェードイン
        $(".shopinfo img").eq(nextIdx).fadeIn();
    
        // インデックスを更新
        currentIdx = nextIdx;
      }
    })
   })













}