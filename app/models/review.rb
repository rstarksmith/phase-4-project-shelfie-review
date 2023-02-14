class Review < ApplicationRecord
    validates :header, presence: true, length: { in: 3..40 }
    validates :comment, presence:true, length: { in: 20..300 }

    belongs_to :user
    belongs_to :book
end
