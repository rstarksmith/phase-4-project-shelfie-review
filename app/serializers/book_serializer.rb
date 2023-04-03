class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :genre, :image_url

  has_many :reviews
  #did not need the users relationship because I added the :owner attribute to reviews, to avoid attaching more information
  #should I make a serializer just for books/reviews?
end
