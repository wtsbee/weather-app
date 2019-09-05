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
  // 東京都 --------------------------------------------------------------
  function buildHTML_map_13(){
    var html = `<div class="prefecture-map-13">
                  <div id="Tokyo_Tokyo">
                    <a class="location" data-prefecture="東京都" data-location="東京">◉東京</a>
                  </div>
                </div>`
    return html;
  }
  // 神奈川県 ------------------------------------------------------------
  function buildHTML_map_14(){
    var html = `<div class="prefecture-map-14">
                  <div id="Yokohama_Kanagawa">
                    <a class="location" data-prefecture="神奈川県" data-location="横浜市">◉横浜市</a>
                  </div>
                </div>`
    return html;
  }
  // 新潟県 --------------------------------------------------------------
  function buildHTML_map_15(){
    var html = `<div class="prefecture-map-15">
                  <div id="Niigata_Niigata">
                    <a class="location" data-prefecture="新潟県" data-location="新潟市">◉新潟市</a>
                  </div>
                </div>`
    return html;
  }
  // 富山県 --------------------------------------------------------------
  function buildHTML_map_16(){
    var html = `<div class="prefecture-map-16">
                  <div id="Toyama_Toyama">
                    <a class="location" data-prefecture="富山県" data-location="富山市">◉富山市</a>
                  </div>
                </div>`
    return html;
  }
  // 石川県 --------------------------------------------------------------
  function buildHTML_map_17(){
    var html = `<div class="prefecture-map-17">
                  <div id="Kanazawa_Ishikawa">
                    <a class="location" data-prefecture="石川県" data-location="金沢市">◉金沢市</a>
                  </div>
                </div>`
    return html;
  }
  // 福井県 --------------------------------------------------------------
  function buildHTML_map_18(){
    var html = `<div class="prefecture-map-18">
                  <div id="Fukui_Fukui">
                    <a class="location" data-prefecture="福井県" data-location="福井市">◉福井市</a>
                  </div>
                </div>`
    return html;
  }
  // 福井県 --------------------------------------------------------------
  function buildHTML_map_19(){
    var html = `<div class="prefecture-map-19">
                  <div id="Kofu_Yamanashi">
                    <a class="location" data-prefecture="山梨県" data-location="甲府市">◉甲府市</a>
                  </div>
                </div>`
    return html;
  }
  // 長野県 --------------------------------------------------------------
  function buildHTML_map_20(){
    var html = `<div class="prefecture-map-20">
                  <div id="Nagano_Nagano">
                    <a class="location" data-prefecture="長野県" data-location="長野市">◉長野市</a>
                  </div>
                </div>`
    return html;
  }
  // 岐阜県 --------------------------------------------------------------
  function buildHTML_map_21(){
    var html = `<div class="prefecture-map-21">
                  <div id="Gifu_Gifu">
                    <a class="location" data-prefecture="岐阜県" data-location="岐阜市">◉岐阜市</a>
                  </div>
                </div>`
    return html;
  }
  // 静岡県 --------------------------------------------------------------
  function buildHTML_map_22(){
    var html = `<div class="prefecture-map-22">
                  <div id="Shizuoka_Shizuoka">
                    <a class="location" data-prefecture="静岡県" data-location="静岡市">◉静岡市</a>
                  </div>
                </div>`
    return html;
  }
  // 愛知県 --------------------------------------------------------------
  function buildHTML_map_23(){
    var html = `<div class="prefecture-map-23">
                  <div id="Nagoya_Aichi">
                    <a class="location" data-prefecture="愛知県" data-location="名古屋市">◉名古屋市</a>
                  </div>
                </div>`
    return html;
  }
  // 三重県 --------------------------------------------------------------
  function buildHTML_map_24(){
    var html = `<div class="prefecture-map-24">
                  <div id="Tsu_Mie">
                    <a class="location" data-prefecture="三重県" data-location="津市">◉津市</a>
                  </div>
                </div>`
    return html;
  }
  // 滋賀県 --------------------------------------------------------------
  function buildHTML_map_25(){
    var html = `<div class="prefecture-map-25">
                  <div id="Hikone_Shiga">
                    <a class="location" data-prefecture="滋賀県" data-location="彦根市">◎彦根市</a>
                  </div>
                </div>`
    return html;
  }
  // 京都府 --------------------------------------------------------------
  function buildHTML_map_26(){
    var html = `<div class="prefecture-map-26">
                  <div id="Kyoto_Kyoto">
                    <a class="location" data-prefecture="京都府" data-location="京都市">◉京都市</a>
                  </div>
                </div>`
    return html;
  }
  // 大阪府 --------------------------------------------------------------
  function buildHTML_map_27(){
    var html = `<div class="prefecture-map-27">
                  <div id="Osaka_Osaka">
                    <a class="location" data-prefecture="大阪府" data-location="大阪市">◉大阪市</a>
                  </div>
                </div>`
    return html;
  }
  // 兵庫県 --------------------------------------------------------------
  function buildHTML_map_28(){
    var html = `<div class="prefecture-map-28">
                  <div id="Kobe_Hyogo">
                    <a class="location" data-prefecture="兵庫県" data-location="神戸市">◉神戸市</a>
                  </div>
                </div>`
    return html;
  }
  // 奈良県 --------------------------------------------------------------
  function buildHTML_map_29(){
    var html = `<div class="prefecture-map-29">
                  <div id="Nara_Nara">
                    <a class="location" data-prefecture="奈良県" data-location="奈良市">◉奈良市</a>
                  </div>
                </div>`
    return html;
  }
  // 和歌山県 ------------------------------------------------------------
  function buildHTML_map_30(){
    var html = `<div class="prefecture-map-30">
                  <div id="Wakayama_Wakayama">
                    <a class="location" data-prefecture="和歌山県" data-location="和歌山市">◉和歌山市</a>
                  </div>
                </div>`
    return html;
  }
  // 鳥取県 --------------------------------------------------------------
  function buildHTML_map_31(){
    var html = `<div class="prefecture-map-31">
                  <div id="Tottori_Tottori">
                    <a class="location" data-prefecture="鳥取県" data-location="鳥取市">◉鳥取市</a>
                  </div>
                </div>`
    return html;
  }
  // 島根県 --------------------------------------------------------------
  function buildHTML_map_32(){
    var html = `<div class="prefecture-map-32">
                  <div id="Matsue_Shimane">
                    <a class="location" data-prefecture="島根県" data-location="松江市">◉松江市</a>
                  </div>
                </div>`
    return html;
  }
  // 岡山県 --------------------------------------------------------------
  function buildHTML_map_33(){
    var html = `<div class="prefecture-map-33">
                  <div id="Okayama_Okayama">
                    <a class="location" data-prefecture="岡山県" data-location="岡山市">◉岡山市</a>
                  </div>
                </div>`
    return html;
  }
  // 広島県 --------------------------------------------------------------
  function buildHTML_map_34(){
    var html = `<div class="prefecture-map-34">
                  <div id="Hiroshima_Hiroshima">
                    <a class="location" data-prefecture="広島県" data-location="広島市">◉広島市</a>
                  </div>
                </div>`
    return html;
  }
  // 山口県 --------------------------------------------------------------
  function buildHTML_map_35(){
    var html = `<div class="prefecture-map-35">
                  <div id="Shimonoseki_Yamaguchi">
                    <a class="location" data-prefecture="山口県" data-location="下関市">◎下関市</a>
                  </div>
                </div>`
    return html;
  }
  // 徳島県 --------------------------------------------------------------
  function buildHTML_map_36(){
    var html = `<div class="prefecture-map-36">
                  <div id="Tokushima_Tokushima">
                    <a class="location" data-prefecture="徳島県" data-location="徳島市">◉徳島市</a>
                  </div>
                </div>`
    return html;
  }
  // 香川県 --------------------------------------------------------------
  function buildHTML_map_37(){
    var html = `<div class="prefecture-map-37">
                  <div id="Takamatsu_Kagawa">
                    <a class="location" data-prefecture="香川県" data-location="高松市">◉高松市</a>
                  </div>
                </div>`
    return html;
  }
  // 愛媛県 --------------------------------------------------------------
  function buildHTML_map_38(){
    var html = `<div class="prefecture-map-38">
                  <div id="Matsuyama_Ehime">
                    <a class="location" data-prefecture="愛媛県" data-location="松山市">◉松山市</a>
                  </div>
                </div>`
    return html;
  }
  // 高知県 --------------------------------------------------------------
  function buildHTML_map_39(){
    var html = `<div class="prefecture-map-39">
                  <div id="Kochi_Kochi">
                    <a class="location" data-prefecture="高知県" data-location="高知市">◉高知市</a>
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
