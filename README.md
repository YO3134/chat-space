Structure of DataBase

## Userテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, add_index|

### association
- has_many :names, through: :members
- has_many :members
- has_many :comments


## membersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :name
- belongs_to :user


## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|
|image|string||
|body|text||

### Association
- belongs_to :user
- belongs_to :name


## nameテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|text|null: false|

### Association
- has_many :users, throudh: :members
- has_many :members
- has_many :comments
