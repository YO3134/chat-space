$(function() {
  function buildHTML(message) {
  var image = (message.image) ? `<img src=${message.image}>` : "";
    var html = `<div class="message" data-message-id="${message.id}">
                  <div class="upper_message">
                    <p class="upper_message__user_name">
                      ${message.user_name}
                    </p>
                    <p class="upper_message__date">
                      ${message.created_at}
                    </p>
                  </div>
                  <div class="lower_message">
                      <p class="lower_message__text">
                        ${image}
                      ${message.body}
                      </p>
                  </div>
                </div>`
    return html
  }

  function scroll() {
  $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight},'slow');
  }

  $(".new_message").on("submit",function(e) {
    e.preventDefault();
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
      var html = buildHTML(data);
      if (data.length !== 0) {
      $('.messages').append(html)
      $('.form__message').val('')
      $('#message_image').val('')
      scroll();
     }
    })
    .fail(function() {
      alert('エラーが発生しました')
    })
    return false;
  });

  var interval = setInterval(function() {
    var message_id = $('.message').last().data('message-id');
    var url = location.pathname.match(/\/groups\/\d+\/messages/);
    if (url) {
      $.ajax({
        url: url,
        type: "GET",
        data:  {id: message_id},
        dataType: 'json',
      })
      .done(function(data) {
        if (data.length !== 0) {
          var lastLength = data.length - 1;
          var newMessage = data[lastLength];
          console.log(newMessage);
          var html = buildHTML(newMessage);
          $('.messages').append(html);
          scroll();
        }
      })
      .fail(function() {
        alert('自動更新に失敗しました')
      })
    } else {
      clearInterval(interval)
    }
  }, 5000);
});
