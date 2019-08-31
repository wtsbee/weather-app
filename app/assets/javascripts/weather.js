$(function(){
  
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
      console.log(data);
      console.log(data["record"]);
      $('.show-html').append(html)
    })
  })

});
