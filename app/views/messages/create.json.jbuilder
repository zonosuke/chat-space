json.user_name @message.user.name
json.created_at @message.created_at.strftime("%Y年%m月%d日 %H時%M分")
json.comment @message.comment
json.image @message.image.url
