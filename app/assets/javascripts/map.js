$(document).on('turbolinks:load', function(){

  // 北海道 --------------------------------------------------------------
  function buildHTML_map_1(){
    var html = `<div class="prefecture-map-1">
                  <div id="Sapporo_Hokkaido">
                    <a class="location" data-prefecture="北海道" data-location="札幌市">◉札幌市</a>
                  </div>
                  <div id="Kitami_Hokkaido">
                    <a class="location" data-prefecture="北海道" data-location="北見市">◎北見市</a>
                  </div>
                </div>`
    return html;
  }
  // 青森県 --------------------------------------------------------------
  function buildHTML_map_2(){
    var html = `<div class="prefecture-map-2">
                  <div id="Aomori_Aomori">
                    <a class="location" data-prefecture="青森県" data-location="青森市">◉青森市</a>
                  </div>
                </div>`
    return html;
  }
  // 岩手県 --------------------------------------------------------------
  function buildHTML_map_3(){
    var html = `<div class="prefecture-map-3">
                  <div id="Morioka_Iwate">
                    <a class="location" data-prefecture="岩手県" data-location="盛岡市">◉盛岡市</a>
                  </div>
                </div>`
    return html;
  }
  // 宮城県 --------------------------------------------------------------
  function buildHTML_map_4(){
    var html = `<div class="prefecture-map-4">
                  <div id="Sendai_Miyagi">
                    <a class="location" data-prefecture="宮城県" data-location="仙台市">◉仙台市</a>
                  </div>
                </div>`
    return html;
  }
  // 秋田県 --------------------------------------------------------------
  function buildHTML_map_5(){
    var html = `<div class="prefecture-map-5">
                  <div id="Akita_Akita">
                    <a class="location" data-prefecture="秋田県" data-location="秋田市">◉秋田市</a>
                  </div>
                </div>`
    return html;
  }
  // 山形県 --------------------------------------------------------------
  function buildHTML_map_6(){
    var html = `<div class="prefecture-map-6">
                  <div id="Yamagata_Yamagata">
                    <a class="location" data-prefecture="山形県" data-location="山形市">◉山形市</a>
                  </div>
                </div>`
    return html;
  }
  // 福島県 --------------------------------------------------------------
  function buildHTML_map_7(){
    var html = `<div class="prefecture-map-7">
                  <div id="Fukushima_Fukushima">
                    <a class="location" data-prefecture="福島県" data-location="福島市">◉福島市</a>
                  </div>
                </div>`
    return html;
  }
  // 茨城県 --------------------------------------------------------------
  function buildHTML_map_8(){
    var html = `<div class="prefecture-map-8">
                  <div id="Mito_Ibaraki">
                    <a class="location" data-prefecture="茨城県" data-location="水戸市">◉水戸市</a>
                  </div>
                </div>`
    return html;
  }
  // 栃木県 --------------------------------------------------------------
  function buildHTML_map_9(){
    var html = `<div class="prefecture-map-9">
                  <div id="Utsunomiya_Tochigi">
                    <a class="location" data-prefecture="栃木県" data-location="宇都宮市">◉宇都宮市</a>
                  </div>
                </div>`
    return html;
  }
  // 群馬県 --------------------------------------------------------------
  function buildHTML_map_10(){
    var html = `<div class="prefecture-map-10">
                  <div id="Maebashi_Gunma">
                    <a class="location" data-prefecture="群馬県" data-location="前橋市">◉前橋市</a>
                  </div>
                </div>`
    return html;
  }
  // 群馬県 --------------------------------------------------------------
  function buildHTML_map_11(){
    var html = `<div class="prefecture-map-11">
                  <div id="Saitama_Saitama">
                    <a class="location" data-prefecture="埼玉県" data-location="さいたま市">◉さいたま市</a>
                  </div>
                </div>`
    return html;
  }
  // 千葉県 --------------------------------------------------------------
  function buildHTML_map_12(){
    var html = `<div class="prefecture-map-12">
                  <div id="Chiba_Chiba">
                    <a class="location" data-prefecture="千葉県" data-location="千葉市">◉千葉市</a>
                  </div>
                </div>`
    return html;
  }

  $(window).bind("load", function(){

    // 現在ページのURL取得
    var url   = location.href;
  
    // URLに/maps/◯◯が含まれていたら実行
    if(document.URL.match("/maps/47")) {
      var html = buildHTML_map_47();
      $('.prefecture-map').append(html)
    } else if(document.URL.match("/maps/46")) {
      var html = buildHTML_map_46();
      $('.prefecture-map').append(html)
    } else if(document.URL.match("/maps/45")) {
      var html = buildHTML_map_45();
      $('.prefecture-map').append(html)
    } else if(document.URL.match("/maps/44")) {
      var html = buildHTML_map_44();
      $('.prefecture-map').append(html)
    } else if(document.URL.match("/maps/43")) {
      var html = buildHTML_map_43();
      $('.prefecture-map').append(html)
    } else if(document.URL.match("/maps/42")) {
      var html = buildHTML_map_42();
      $('.prefecture-map').append(html)
    } else if(document.URL.match("/maps/41")) {
      var html = buildHTML_map_41();
      $('.prefecture-map').append(html)
    } else if(document.URL.match("/maps/40")) {
      var html = buildHTML_map_40();
      $('.prefecture-map').append(html)
    } else if(document.URL.match("/maps/39")) {
      var html = buildHTML_map_39();
      $('.prefecture-map').append(html)
    } else if(document.URL.match("/maps/38")) {
      var html = buildHTML_map_38();
      $('.prefecture-map').append(html)
    } else if(document.URL.match("/maps/37")) {
      var html = buildHTML_map_37();
      $('.prefecture-map').append(html)
    } else if(document.URL.match("/maps/36")) {
      var html = buildHTML_map_36();
      $('.prefecture-map').append(html)
    } else if(document.URL.match("/maps/35")) {
      var html = buildHTML_map_35();
      $('.prefecture-map').append(html)
    } else if(document.URL.match("/maps/34")) {
      var html = buildHTML_map_34();
      $('.prefecture-map').append(html)
    } else if(document.URL.match("/maps/33")) {
      var html = buildHTML_map_33();
      $('.prefecture-map').append(html)
    } else if(document.URL.match("/maps/32")) {
      var html = buildHTML_map_32();
      $('.prefecture-map').append(html)
    } else if(document.URL.match("/maps/31")) {
      var html = buildHTML_map_31();
      $('.prefecture-map').append(html)
    } else if(document.URL.match("/maps/30")) {
      var html = buildHTML_map_30();
      $('.prefecture-map').append(html)
    } else if(document.URL.match("/maps/29")) {
      var html = buildHTML_map_29();
      $('.prefecture-map').append(html)
    } else if(document.URL.match("/maps/28")) {
      var html = buildHTML_map_28();
      $('.prefecture-map').append(html)
    } else if(document.URL.match("/maps/27")) {
      var html = buildHTML_map_27();
      $('.prefecture-map').append(html)
    } else if(document.URL.match("/maps/26")) {
      var html = buildHTML_map_26();
      $('.prefecture-map').append(html)
    } else if(document.URL.match("/maps/25")) {
      var html = buildHTML_map_25();
      $('.prefecture-map').append(html)
    } else if(document.URL.match("/maps/24")) {
      var html = buildHTML_map_24();
      $('.prefecture-map').append(html)
    } else if(document.URL.match("/maps/23")) {
      var html = buildHTML_map_23();
      $('.prefecture-map').append(html)
    } else if(document.URL.match("/maps/22")) {
      var html = buildHTML_map_22();
      $('.prefecture-map').append(html)
    } else if(document.URL.match("/maps/21")) {
      var html = buildHTML_map_21();
      $('.prefecture-map').append(html)
    } else if(document.URL.match("/maps/20")) {
      var html = buildHTML_map_20();
      $('.prefecture-map').append(html)
    } else if(document.URL.match("/maps/19")) {
      var html = buildHTML_map_19();
      $('.prefecture-map').append(html)
    } else if(document.URL.match("/maps/18")) {
      var html = buildHTML_map_18();
      $('.prefecture-map').append(html)
    } else if(document.URL.match("/maps/17")) {
      var html = buildHTML_map_17();
      $('.prefecture-map').append(html)
    } else if(document.URL.match("/maps/16")) {
      var html = buildHTML_map_16();
      $('.prefecture-map').append(html)
    } else if(document.URL.match("/maps/15")) {
      var html = buildHTML_map_15();
      $('.prefecture-map').append(html)
    } else if(document.URL.match("/maps/14")) {
      var html = buildHTML_map_14();
      $('.prefecture-map').append(html)
    } else if(document.URL.match("/maps/13")) {
      var html = buildHTML_map_13();
      $('.prefecture-map').append(html)
    } else if(document.URL.match("/maps/12")) {
      var html = buildHTML_map_12();
      $('.prefecture-map').append(html)
    } else if(document.URL.match("/maps/11")) {
      var html = buildHTML_map_11();
      $('.prefecture-map').append(html)
    } else if(document.URL.match("/maps/10")) {
      var html = buildHTML_map_10();
      $('.prefecture-map').append(html)
    } else if(document.URL.match("/maps/9")) {
      var html = buildHTML_map_9();
      $('.prefecture-map').append(html)
    } else if(document.URL.match("/maps/8")) {
      var html = buildHTML_map_8();
      $('.prefecture-map').append(html)
    } else if(document.URL.match("/maps/7")) {
      var html = buildHTML_map_7();
      $('.prefecture-map').append(html)
    } else if(document.URL.match("/maps/6")) {
      var html = buildHTML_map_6();
      $('.prefecture-map').append(html)
    } else if(document.URL.match("/maps/5")) {
      var html = buildHTML_map_5();
      $('.prefecture-map').append(html)
    } else if(document.URL.match("/maps/4")) {
      var html = buildHTML_map_4();
      $('.prefecture-map').append(html)
    } else if(document.URL.match("/maps/3")) {
      var html = buildHTML_map_3();
      $('.prefecture-map').append(html)
    } else if(document.URL.match("/maps/2")) {
      var html = buildHTML_map_2();
      $('.prefecture-map').append(html)
    } else {
      var html = buildHTML_map_1();
      $('.prefecture-map').append(html)
    } 
  });

  $(document).on('click','.location', function(e) {
    var prefecture = $(this).data("prefecture");
    var location = $(this).data("location");
    window.location.href = "/maps/:map_id/weathers?prefecture=" +  prefecture + "&location=" + location;
  });
});
