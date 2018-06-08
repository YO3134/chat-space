$(function() {
var users_list = $("#user-search-result");
function appendUser(user) {
  var html = `<div class="chat-group-user clearfix">
              <p class="chat-group-user__name">${user.name}</p>
              <a class="user-search-add chat-group-user__btn chat-group-user__btn--add js-add-btn" data-user-id=${user.id} data-user-name=${user.name}>追加</a>
              `
  users_list.append(html);
}

function appendNoUser(user) {
  var html = `<div class="chat-group-user clearfix">
                ${user.name}
              </div>`
  users_list.append(html);
}

  $(".chat-group-form__input").on("keyup", function() {
    var input = $.trim($(this).val());
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { name: input },
      dataType: 'json'
    })

    .done(function(users) {
      $("#user-search-result").empty();
      if(users.length !== 0 ) {
        users.forEach(function(user) {
          appendUser(user);
        });
      } else {
        appendNOUser("一致するユーザーはいません");
      }
    })
    .fail(function() {
      alert('ユーザー検索に失敗しました。');
    });
  });
});

//   <div id='chat-group-users'>
//     <div class='chat-group-user clearfix' id='chat-group-user-22'>
//     <input name='chat_group[user_ids][]' type='hidden' value='22'>
//     <p class='chat-group-user__name'>seo_kyohei</p>
//     </div>
//     </div>
