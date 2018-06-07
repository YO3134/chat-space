json.array! @user do |user|
  json.user_name    user.user.name
  json.user_id      user.user_id
end


