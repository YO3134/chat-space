$(function() {
  function buildHTML(message) {
    if (message.image.url) {
    var image = `<img src=${message.image.url}>`
    } else {
      var image = ""
    }
    console.log(image)
    var html = `<div class="message">
                  <div class="upper_message">
                    <p class="upper_message__user_name">
                      ${message.body}
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
      $('.hidden').val('')
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight},'slow');
    })
    .fail(function() {
      alert('エラーが発生しました')
    })
    return false;
  })
});
