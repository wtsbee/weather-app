$(function(){

  function buildHTML(){
    var html = `<div id="Sapporo">
                  <a class="location" data-prefecture="北海道" data-location="札幌市">札幌市</a>
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

  $(document).on('click','.location', function(e) {
    var prefecture = $(this).data("prefecture");
    var location = $(this).data("location");
    window.location.href = "/maps/:map_id/weathers?prefecture=" +  prefecture + "&location=" + location;
  });
});
