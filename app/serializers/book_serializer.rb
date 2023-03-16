class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :genre, :image_url

  has_many :reviews
  
end
