$(function() {

      function buildHTML(message) {
        if (message.image) {
          var html = 
            `<div class="main-message__list" data-message-id=${message.id}>
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
                <div class="main-message__image">
                  <img src=${message.image}>  
                </div> 
              </div>
            </div>`
          return html;
        } else {
          var html = 
            `<div class="main-message__list" data-message-id=${message.id}>
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

  var reloadMessages = function() {
    var last_message_id = $('.main-message__list:last').data("message-id");
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
        var insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.main-message__lists').append(insertHTML);
        $('.main-message__lists').animate({ scrollTop: $('.main-message__lists')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    })
  };
  if (document.location.href.match(/\/groups\/\d+\/messages/)) {
    setInterval(reloadMessages, 7000);
  }
});
