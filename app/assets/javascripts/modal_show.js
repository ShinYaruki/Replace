$(function(){
// 店の詳細ページモーダルここから
  $('.place__show').click(function(){
    $("body").append(` <div class="modal">
                        <div class="modal__cssplace">
                          <div class="pclose pclose__1">×</div>
                          <div class="pclose pclose__2">×</div>
                          <div class="pclose pclose__3">×</div>
                          <div class="pclose pclose__4">×</div>
                          <div class="modal__pname modal__flex">
                            <div class="modal__pname__left modal__left">店名</div>
                            <div class="modal__pname__right modal__right"></div>
                          </div>
                          <div class="modal__map modal__flex">
                            <div class="modal__map__left modal__left">地図</div>
                            <div class="modal__map__right modal__right"></div>
                          </div>
                          <div class="modal__address modal__flex">
                            <div class="modal__address__left modal__left">住所</div>
                            <div class="modal__address__right modal__right"></div>
                          </div>
                          <div class="modal__station modal__flex">
                            <div class="modal__station__left modal__left">最寄り駅</div>
                            <div class="modal__station__right modal__right"></div>
                          </div>
                          <div class="modal__open modal__flex">
                            <div class="modal__open__left modal__left">営業時間</div>
                            <div class="modal__open__right modal__right"></div>
                          </div>
                          <div class="modal__number modal__flex">
                            <div class="modal__number__left modal__left">電話番号</div>
                            <div class="modal__number__right modal__right"></div>
                          </div>
                          <div class="modal__sheet modal__flex">
                            <div class="modal__sheet__left modal__left">席数</div>
                            <div class="modal__sheet__right modal__right"></div>
                          </div>
                          <div class="modal__pcheckbox modal__flex">
                            <div class="modal__pcheckbox__left modal__left">特徴</div>
                            <div class="modal__pcheckbox__right modal__right"></div>
                          </div>
                          <div class="modal__content modal__flex">
                           <div class="modal__content__left modal__left">投稿者からの一言！</div>
                           <div class="modal__content__right modal__right"></div>
                          </div>
                          <div class="modal__pedit modal__flex">
                            <div class="modal__pedit__center" id="edit-place">編集(未実装)</div>
                          </div>
                        </div>
                      </div>
                      <div class="overlay"></div>'`);
    $(".modal,.overlay").fadeIn("slow");
    $(".pclose,.overlay").click(function(){
      $(".modal,.overlay").fadeOut("slow",function(){
      $(".modal,.overlay").remove()
      });
    });
  });

// カスタム属性とattrを使用し、each doで持ってきたインスタンス変数の値を代入
$('.place__show').click(function() {
  let pname = $(this).attr('data-pname');
  let address = $(this).attr('data-address');
  let map = `<iframe src="https://maps.google.co.jp/maps?output=embed&t=m&z=16&q=${address}" 
  width="480" height="360" style="border:0;" allowfullscreen=“”></iframe>`;
  let station = $(this).attr('data-station');
  let walk = $(this).attr('data-walk');
  let open = $(this).attr('data-open');
  let close = $(this).attr('data-close');
  let number = $(this).attr('data-number');
  let sheet = $(this).attr('data-sheet');
  let pcheckbox = $(this).attr('data-pcheckbox');
  let content = $(this).attr('data-content');

  $("body").find('.modal__pname__right').text(pname); //モーダルの該当箇所にnameの値をテキストとして挿入
  $("body").find('.modal__map__right').append(map); //modal-nameの直後に変数mapの値を挿入
  $("body").find('.modal__address__right').text(address);
  $("body").find('.modal__station__right').text(station + " " + walk);
  $("body").find('.modal__open__right').text(open + " 〜 " + close);
  $("body").find('.modal__number__right').text(number);
  $("body").find('.modal__sheet__right').text(sheet + " 席");
  $("body").find('.modal__pcheckbox__right').append(pcheckbox);
  $("body").find('.modal__content__right').text(content);
  });
// 店の詳細ページモーダルここまで

//音楽詳細ページモーダルここから
  $('.mshow').click(function(){
    $("body").append(`<div class="modal">
                        <div class="modal__cssmusic">
                        <div class="mclose mclose__1">×</div>
                        <div class="mclose mclose__2">×</div>
                        <div class="mclose mclose__3">×</div>
                        <div class="mclose mclose__4">×</div>
                          <div class="modal__mname modal__flex">
                            <div class="modal__mname__left modal__left">タイトル</div>
                            <div class="modal__mname__right modal__right"></div>
                          </div>
                          <div class="modal__url modal__flex">
                            <div class="modal__url__left modal__left">動画</div>
                            <div class="modal__url__right modal__right"></div>
                          </div>
                          <div class="modal__artist modal__flex">
                          <div class="modal__artist__left modal__left">アーティスト名</div>
                          <div class="modal__artist__right modal__right"></div>
                        </div>
                          <div class="modal__playtime modal__flex">
                            <div class="modal__playtime__left modal__left">再生時間</div>
                            <div class="modal__playtime__right modal__right"></div>
                          </div>
                          <div class="modal__content modal__flex">
                            <div class="modal__content__left modal__left">投稿者からの一言！</div>
                            <div class="modal__content__right modal__right"></div>
                          </div>
                          <div class="modal__medit modal__flex">
                            <div class="modal__medit__center" id="edit-music">編集(未実装)</div>
                          </div>
                        </div>
                      </div>
                      <div class="overlay"></div>`);
    $(".modal,.overlay").fadeIn("slow");
    $(".mclose,.overlay").click(function(){
      $(".modal,.overlay").fadeOut("slow",function(){
      $(".modal,.overlay").remove()
      });
    });
  });

  $('.music__show').click(function() {
    let mname = $(this).attr('data-mname');
    let url = $(this).attr('data-url');
    let id = url.match(/[\/?=]([a-zA-Z0-9_-]{11})[&\?]?/)[1];
    let movie = `<iframe width="480" height="270" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    let artist = $(this).attr("data-artist")
    let playtime = $(this).attr('data-playtime');
    let content = $(this).attr('data-mcontent');

    $("body").find('.modal__mname__right').text(mname);
    $("body").find('.modal__artist__right').text(artist);
    $("body").find('.modal__url__right').append(movie);
    $("body").find('.modal__playtime__right').text(playtime);
    $("body").find('.modal__content__right').text(content);
//音楽詳細ページモーダルここまで
  });

});