$(function() {

var search_list = $(".chat-group-form__field--right");

function appendUser(user) {
  var html = `<div class='chat-group-form__field--left'>
                  <label class="chat-group-form__label" for="chat_group_チャットメンバーを追加">チャットメンバーを追加</label>
              </div>
              <div class='chat-group-form__field--right'>
                  <div class='chat-group-form__search clearfix'>
                    <input class='chat-group-form__input' id='user-search-field' placeholder='追加したいユーザー名を入力してください' type='text'>
                  </div>
                <div id='user-search-result'>
                </div>
               </div>`
  search_list.append(html);
}

function appendNoUser(user) {
  var html = `<div class='chat-group-form__field--right'>
                  <div class='chat-group-form__search clearfix'>
                    <input class='chat-group-form__input' id='user-search-field' placeholder='追加したいユーザー名を入力してください' type='text'>
                  </div>
                  <div id='user-search-result'></div>
               </div>`
  search_list.append(html);
}

  $(".chat-group-form__input").on("keyup", function() {
    var label = $(".chat-group-form__input").val();
    console.log(input);

    $.ajax({
      type: 'GET',
      url: '/users/index',
      data: { keyword: input },
      dataType: 'json'
    })

    .done(function(users) {
      $(".chat-group-form__field--right").empty();
      if(users.length !== 0) {
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



    // $.ajax({
    //   type: 'GET',
    //   url:  '/users/index'
    //   data: { keyword:input },
    //   dataType: 'json'
    // })


  // $(".chat-group-form__field--left").on("keyup", function(e) {
  //   var label = $(".chat-group-form__label").val();


   // console.log(input);

//     .done(function(users) {
//       $(".hidden").empty();
//       if (users.length !== 0) {
//         users.forEach(function(user){
//           appendUser(user);
//         });
//       }
//       else {
//         appendNOUser("一致するユーザーはいません");
//       }
//     })
//   });
// });






//     .fail(function() {
//       alert('error');
//     })
//     return false;
//   });
// });









//   <div id='chat-group-users'>
//     <div class='chat-group-user clearfix' id='chat-group-user-22'>
//     <input name='chat_group[user_ids][]' type='hidden' value='22'>
//     <p class='chat-group-user__name'>seo_kyohei</p>
//     </div>
//     </div>
