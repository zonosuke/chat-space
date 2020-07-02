$(function() {
      function buildHTML(message) {
        if (message.image) {
          var html = 
            `<div class="main-message__list">
              <div class="main-message__user-date">
                <div class="main-message__user-date__name">
                  ${message.user_name}
                </div>
                <div class="main-message__user-date__date">
                  ${message.created_at}
                </div>
              </div>
              <div class="main-message__comment">
                <p class="main-message__content">
                  ${message.comment}
                </p>
              </div>
              <div class="main-message__image">
              ${message.image}    
              </div>       
            </div>`
          return html;
        } else {
          var html = 
            `<div class="main-message__list">
              <div class="main-message__user-date">
                <div class="main-message__user-date__name">
                  ${message.user_name}
                </div>
                <div class="main-message__user-date__date">
                  ${message.created_at}
                </div>
                <div class="main-message__comment">
                  <p class="main-message__content">
                    ${message.comment}
                  </p>
                </div>             
              </div>
            </div>`
          return html;  
        };
      }
  $('#new_message').on('submit', function(e) {
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      var html = buildHTML(data);
      $('.main-message__lists').append(html)
      $('.main-message__lists').animate({ scrollTop: $('.main-message__lists')[0].scrollHeight});
      $('#message_comment').val('')
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    })
    .always(function(data) {
      $('.main-form__btn').prop('disabled', false);
    })
  });
});
