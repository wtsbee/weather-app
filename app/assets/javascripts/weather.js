$(document).on('turbolinks:load', function(){
  
  function buildTH (values) {
    var res = ''
    values.forEach(function(value) {
      var th = `<th scope="col">${value}</th>\n`;
      res += th;
    });
    return res;
  }

  function buildTD (values) {
    var res = ''
    values.forEach(function(value) {
      var td = `<td>${value}</td>\n`;
      res += td;
    });
    return res;
  }

  function buildTR (values) {
    var res = ''
    values.forEach(function(value) {
      var tr = `<tr>${buildTD(value)}</tr>\n`;
      res += tr;
    });
    return res;
  }

  function buildHTML(header, record){
    var html = `<table>
                  <thead>
                    <tr>
                      ${buildTH(header)}
                    </tr>
                  </thead>
                  <tbody>
                    ${buildTR(record)}
                  </tbody>
                </table>`
    return html;
  }

  $('.submit-form').on('submit', function(e){
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data["header"], data["record"]);
      $('.show-html').children().remove();
      $('.show-html').append(html)
    })
    // 連続でボタンが押せるようにする
    .always(function(data){
      $('.submit-btn').prop('disabled', false);
    })
  })

  // 月日選択のプルダウン
  function formSetDay(){
    var lastday = formSetLastDay($('.js-changeMonth').val());
    var option = '';
    for (var i = 1; i <= lastday; i++) {
      if (i === $('.js-changeDay').val()){
        option += '<option value="' + i + '" selected="selected">' + i + '</option>\n';
      }else{
        option += '<option value="' + i + '">' + i + '</option>\n';
      }
    }
    $('.js-changeDay').html(option);
  }

  function formSetLastDay(month){
    var lastday = new Array('', 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
    return lastday[month];
  }

  $('.js-changeYear, .js-changeMonth').change(function(){
    formSetDay();
  });

  // フラッシュメッセージの設定
  setTimeout(function() {
    $('.alert').remove();
  }, 2000);
});
