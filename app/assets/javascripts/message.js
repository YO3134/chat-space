$(function() {
  function buildHTML(message) {
    if(message.image.present?){
    var image = "<img src=${message.image}>"
    } else {
      var image = ""
    }

    var html = `<div class="message">
                  <div class="upper_message">
                    <p class="upper_message__user_name">
                      ${message.user.name}
                    </p>
                    <p class="upper_message__date">
                      ${form_posted_time(messages.created_at)}
                    </p>
                  </div>
                  <div class="lower_message">
                      <p class="lower_message__text">
                        ${image}
                      <img src=${messages.image.}>
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
      $('.messages').animate({scrollTop: 0}, 500, 'swing');
    })
    .fail(function() {
      alert('エラーが発生しました')
    })
  })
});
