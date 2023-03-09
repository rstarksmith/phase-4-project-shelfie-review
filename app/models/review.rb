class Review < ApplicationRecord
    validates_presence_of :header, :comment
    validates :header, length: { in: 3..40 }
    validates :comment, length: { in: 20..500 }
    validates :user_id, uniqueness: { scope: :book_id, message: "Oops! You've already reviewed this book" }


    belongs_to :user
    belongs_to :book
end
