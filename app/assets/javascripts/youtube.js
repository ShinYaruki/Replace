//Musicタブより投稿されたYouTubeのURLを一度data-srcで受け取りindex.html.rb上でサムネイル表示にし、クリック後に動画を読み込ませる記述
$(function(){
  $('.youtube').each(function() {
    //iframeタグ内の値を取得し、iframeに代入
    let iframe = $(this).children('iframe');
    //data-src内にある動画のURLを取得し、urlに代入
    let url = iframe.attr('data-src');
    //URLから動画のIDとなるものを取得し、idに代入
    let id = url.match(/[\/?=]([a-zA-Z0-9_-]{11})[&\?]?/)[1];
    //取得したURLより動画のサムネイルを取得し、表示する記述
    iframe.before('<img width="250" height="135" src="http://img.youtube.com/vi/'+id+'/mqdefault.jpg" />').remove();
    //クリック後、動画を読み込ませる記述
    $(this).on('click', function() {
      $(this).after('<div class="youtube content__movie"><iframe width="250" height="135" src="https://www.youtube.com/embed/'+id+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>').remove();
    });
  });
});