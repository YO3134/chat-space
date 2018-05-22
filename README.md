Structure of DataBase

## Userテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|name|string|null false, foreign_key: true, add_index|

### association
- has_many :members, through: :group
- has_many :comments


## membersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- has_many :group
- has_many :user


## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|comment|text|null: false|
|image|string|null: false|
|body|text|null: false|

### Association
- belongs_to :user
- belongs_to :group


## groupテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|text|null: false|

###Association
- has_many :user
- has_many :cmments
