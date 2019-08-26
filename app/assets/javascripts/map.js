$(function(){

  function buildHTML(){
    var html = `<div id="Sapporo">
                  <a href=/maps/1/weathers>札幌</a>
                </div>`
    return html;
  }

  $(window).bind("load", function(){

    // 現在ページのURL取得
    var url   = location.href;
  
    // URLに/maps/1が含まれていたら実行
    if(document.URL.match("/maps/1")) {
      var html = buildHTML();
      $('.prefecture-map').append(html)
    }
  
  });
});
