class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :header, :comment, :book_id, :user_id, :owner

  def owner
    "@#{self.object.user.username}"
  end

  belongs_to :user
  belongs_to :book

end
