class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :header, :comment, :book_id, :user_id


  belongs_to :user
  belongs_to :book

end
