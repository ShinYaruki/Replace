// マイページ内の4タブを切り替える記述

$(function()  {
  // タブのDOM要素を取得し、変数で定義
    let mytabs = $(".mypage__tag__title");
  // クラスの切り替えをtabSwitch関数で定義
    function mytabSwitch() {
  // activeクラスを探し、最初のactiveクラスを削除する(タブの選択状態をリセット)
      $('.myactive').removeClass("myactive");
  // クリックしたタブにactiveクラスを追加(クリックしたタブが選択状態になる)
      $(this).addClass("myactive");
  // 何番目の要素がクリックされたかを、配列tabsから要素番号を取得
      const myindex = mytabs.index(this);
  // showクラスを探し、最初のshowクラスを削除、その後クリックしたタブにshowクラスを追加する(該当コンテンツページが表示される)
      $(".mypage__contents").removeClass("myshow").eq(myindex).addClass("myshow");};
  // Place,Music,マイページの3タブを切り替える関数の記述ここまで
  
  // タブがクリックされたらtabSwitch関数を呼び出す
    mytabs.click(mytabSwitch);
  
  });