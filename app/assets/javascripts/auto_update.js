// $(function() {
//   function buildHTML(message) {
//     if (message.image.url) {
//     var image = `<img src=${message.image.url}>`
//     } else {
//       var image = "";
//     }
//     var html = `<div class="message" data_message_id="${message.id}">
//                   <div class="upper_message">
//                     <p class="upper_message__user_name">
//                       ${message.user_name}
//                     </p>
//                     <p class="upper_message__date">
//                       ${message.created_at}
//                     </p>
//                   </div>
//                   <div class="lower_message">
//                       <p class="lower_message__text">
//                         ${image}
//                       ${message.body}
//                       </p>
//                   </div>
//                 </div>`
//     return html
//   };

//   setInterval(update, 5000);

//   function update() {
//     var message_id = $('.message').last().data('data_message_id');
//     console.log(message_id)
//     var url = location.pathname.match(/\/groups\/\d+\/messages/);
//     $.ajax({
//       url: url,
//       type: "GET",
//       data:  {id: message_id},
//       dataType: 'json',
//       contentType: false
//     })
//     .done(function(data) {
//       // console.log(data)
//       if (data.length == 0 ) return false;
//       data.forEach(function(message) {
//         var html = buildHTML(message);
//         $('.messages').append(html);
//       });
//       $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight},'slow');
//     })
//     .fail(function() {
//       // alert('自動更新に失敗しました')
//     })
//     return false;
//   }
// });
