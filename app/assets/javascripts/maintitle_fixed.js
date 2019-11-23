// $(function(){
// //// ３種類のタブをトップから1000pxスクロールさせたら固定させる
// let navPos = jQuery('.main__left__title').offset().top; // グローバルメニューの位置
// let navHeight = jQuery('.main__left__title').outerHeight(); // グローバルメニューの高さ
// jQuery( window ).on('scroll', function() {
//   if ( jQuery( this ).scrollTop() > navPos ) {
//     jQuery('body').css('padding-top', navHeight );
//     jQuery('.main__left__title').addClass('m_fixed');
//   } else {
//     jQuery('body').css('padding-top', 0 );
//     jQuery('.main__left__title').removeClass('m_fixed');
//   }
// });
// });