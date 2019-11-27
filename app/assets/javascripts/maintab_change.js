// Place,Music,マイページの3タブを切り替える記述

$(function()  {
// タブのDOM要素を取得し、変数で定義
  let tabs = $(".main__left__title");
// クラスの切り替えをtabSwitch関数で定義
  function tabSwitch() {
// activeクラスを探し、最初のactiveクラスを削除する(タブの選択状態をリセット)
    $('.active').removeClass("active");
// クリックしたタブにactiveクラスを追加(クリックしたタブが選択状態になる)
    $(this).addClass("active");
// 何番目の要素がクリックされたかを、配列tabsから要素番号を取得
    const index = tabs.index(this);
// showクラスを探し、最初のshowクラスを削除、その後クリックしたタブにshowクラスを追加する(該当コンテンツページが表示される)
    $(".main__left__contents").removeClass("show").eq(index).addClass("show");};
// Place,Music,マイページの3タブを切り替える関数の記述ここまで

// タブがクリックされたらtabSwitch関数を呼び出す
  tabs.click(tabSwitch);

});