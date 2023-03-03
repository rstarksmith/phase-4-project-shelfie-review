class Review < ApplicationRecord
    validates_presence_of :header, :comment
    validates :header, length: { in: 3..40 }
    validates :comment, length: { in: 20..300 }

    belongs_to :user
    belongs_to :book
end
