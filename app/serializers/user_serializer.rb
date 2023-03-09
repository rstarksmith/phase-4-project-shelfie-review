class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :photo_url

  has_many :reviews
  has_many :books
end
