settings = scraperwiki.readSettings()

$(function(){
  $.ajax({
    url: settings.target.url + '/sql/meta',
    dataType: 'json',
    success: function(data){
      var html = '<option selected></option>'
      $.each(data.table, function(tableName, t){
        html += '<optgroup label="'+ tableName +'">'
        $.each(t.columnNames, function(i, columnName){
          html += '<option value="'+ tableName +'.'+ columnName +'">'+ columnName +'</option>'
        })
        html += '</optgroup>'
      })
      $('select').html(html)
    },
    error: function(jqXHR, textStatus, errorThrown){
      console.log(jqXHR.responseText, textStatus, errorThrown)
    }
  })
})