$(function() {
  function buildHTML(message) {
    if (message.image.url) {
    var image = `<img src=${message.image.url}>`
    } else {
      var image = "";
    }
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
      $('.messages').append(html)
      $('.form__message').val('')
      $('#message_image').val('')
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight},'slow');
    })
    .fail(function() {
      alert('エラーが発生しました')
    })
    return false;
  })
});


  setInterval(update, 5000);

  function update() {
    var message_id = $('.message').last().data('message-id');
    console.log(message_id)
    var url = location.pathname.match(/\/groups\/\d+\/messages/);
    $.ajax({
      url: url,
      type: "GET",
      data:  {id: message_id},
      dataType: 'json',
    })
    .done(function(data) {
      console.log(data)
      if (data.length == 0 ) return false;
      data.forEach(function(message) {
        var html = buildHTML(message);
        $('.messages').append(html);
      });
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight},'slow');
    })
    .fail(function() {
      // alert('自動更新に失敗しました')
    })
    return false;
  };
