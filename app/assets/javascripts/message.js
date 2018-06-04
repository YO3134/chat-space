$(function() {
  function buildHTML(comment) {
    var html = `<div class="message">
                  <div class="upper_message">
                    <div class="upper_message__user_name">
                      <%= message.body %>
                    </div>
                    <div class="upper_message__date">
                      <%= form_posted_time(message.created_at) %>
                    </div>
                  </div>
                  <div class="lower_message">
                    <% if message.body.present? %>
                      <div class="lower_message__text">
                        <%= message.body %>
                      </div>
                    <% end %>
                    <%= image_tag message.image, class: 'lower_message__text' if message.image.present? %>
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
