class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :header, :comment, :book_id, :user_id

  has_one :book
end
