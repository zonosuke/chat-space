
## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user 


## usersテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|name|string|null: false|
|email|string|null: false, unique: true
|password|string|null: false, unique: true|

### Association
- has_many :groups_users
- has_many :gruops, through: :groups_users
- has_many :messages


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|member|string|null: false|

### Association
- has_many :groups_users
- has_many :users, through: :groups_users


## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|user-id|integer|null: false, foreign_key: true|
|text|text|null: false|
|created-at|string|null: false|

### Association
- belongs_to :user
