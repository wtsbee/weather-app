$(function(){

  function buildHTML(){
    var html = `<div id="Sapporo">
                  <a class="location" href="/maps/:map_id/weathers" >札幌</a>
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
    // var location_name = $(this).text();
    // e.preventDefault();
    var location_name = $(".location").text();
    console.log(location_name);
    $.ajax({
      url: "/maps/:map_id/weathers",
      type: "GET",
      data: { location: location_name.toString() },
      dataType: 'json'
    })
    
  });
});
