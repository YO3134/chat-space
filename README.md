Structure of DataBase

## userテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, add_index|

### association
- has_many :members
- has_many :groups, through: :members
- has_many :messages


## membersテーブル
|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|
|image|string||
|body|text||

### Association
- belongs_to :user
- belongs_to :group


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|text|null: false|

### Association
- has_many :members
- has_many :users, through: :members
- has_many :messages
