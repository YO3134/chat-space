class Group < ApplicationRecord
  has_many :members
  has_many :user, through: :members
  has_many :messages
end
