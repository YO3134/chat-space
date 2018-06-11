json.array! @new_messages do |message|
  json.user_name     message.user.name
  json.created_at    form_posted_time(message.created_at)
  json.body          message.body
  json.id            message.id
  json.image         message.image.url
end
