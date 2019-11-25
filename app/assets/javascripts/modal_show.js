$(function(){
// 店の詳細ページモーダルここから
  $('.place__show').click(function(){
    $("body").append(` <div class="modal">
                        <div class="modal__css">
                          <div class="close close__1">×</div>
                          <div class="close close__2">×</div>
                          <div class="close close__3">×</div>
                          <div class="close close__4">×</div>
                          <div class="modal__name modal__flex">
                            <div class="modal__name__left modal__left">店名</div>
                            <div class="modal__name__right modal__right"></div>
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
                          <div class="modal__checkbox modal__flex">
                            <div class="modal__checkbox__left modal__left">特徴</div>
                            <div class="modal__checkbox__right modal__right"></div>
                          </div>
                          <div class="modal__content modal__flex">
                           <div class="modal__content__left modal__left">投稿者からの一言！</div>
                           <div class="modal__content__right modal__right"></div>
                          </div>
                          <div class="modal__edit modal__flex">
                            <div class="modal__edit__center">編集(未実装)</div>
                          </div>
                        </div>
                      </div>
                      <div class="overlay"></div>'`);
    $(".modal,.overlay").fadeIn("slow");

    $(".close,.overlay").click(function(){
      $(".modal,.overlay").fadeOut("slow",function(){
      $(".modal,.overlay").remove()
      });
    });
  });

// カスタム属性とattrを使用し、each doで持ってきたインスタンス変数の値を代入
$('.place__show').click(function() {
  let name = $(this).attr('data-name');
  let address = $(this).attr('data-address');
  let map = `<iframe src="https://maps.google.co.jp/maps?output=embed&t=m&z=16&q=${address}" 
  width="480" height="360" style="border:0;" allowfullscreen=“”></iframe>`;
  let station = $(this).attr('data-station');
  let walk = $(this).attr('data-walk');
  let open = $(this).attr('data-open');
  let close = $(this).attr('data-close');
  let number = $(this).attr('data-number');
  let sheet = $(this).attr('data-sheet');
  let checkbox = $(this).attr('data-checkbox');
  let content = $(this).attr('data-content');

  $("body").find('.modal__name__right').text(name); //モーダルの該当箇所にnameの値をテキストとして挿入
  $("body").find('.modal__map__right').append(map); //modal-nameの直後に変数mapの値を挿入
  $("body").find('.modal__address__right').text(address);
  $("body").find('.modal__station__right').text(station + " " + walk);
  $("body").find('.modal__open__right').text(open + " 〜 " + close);
  $("body").find('.modal__number__right').text(number);
  $("body").find('.modal__sheet__right').text(sheet + " 席");
  $("body").find('.modal__checkbox__right').append(checkbox);
  $("body").find('.modal__content__right').text(content);
  });
// 店の詳細ページモーダルここまで
});