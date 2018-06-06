json.array! @user do |user|
  json.body        message.body
  json.image       message.image
  json.user_name   message.user.name
  json.created_at  form_posted_time
end
# message.image.to_s 参考のものはこの記述
#to_sメソッドは、配列を文字列に変換しますとこのこと意味がわからないので記述
