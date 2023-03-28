class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :genre, :image_url, :likes

  has_many :reviews
  
end
