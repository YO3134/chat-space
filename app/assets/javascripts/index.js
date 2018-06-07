$(function() {

var users_list = $(".chat-group-form__input");

function appendUser(user) {
  var html = `<div class='chat-group-users_list'>
                < p class= 'chat-group-user__name'>
                  ${user.name}
                </p>
                < a class="add_chat-group-user" data_user_id= "${user.id}" data_user_name ="${user.name}">
                  <p class="add_chat_group_name">追加</p>
                </a>
              </div>`
  users_list.append(html);
}

function appendNoUser(user) {
  var html = `<div class='chat-group-form__field--right'>
                  <div class='chat-group-form__search clearfix'>
                    <input class='chat-group-form__input' id='user-search-field' placeholder='追加したいユーザー名を入力してください' type='text'>
                  </div>
                  <div id='user-search-result'></div>
               </div>`
  users_list.append(html);
}

  $(".chat-group-form__input").on("keyup", function() {
    var input = $.trim($(this).val());
    console.log(input);
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { name: input },
      dataType: 'json'
    })

    .done(function(users) {
      // $(".chat-group-form__field--right").();
      if(users.length !== 0 ) {
        users.forEach(function(user) {
          appendUser(user);
        });
      }
      else {
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
