class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :genre, :image_url
end
