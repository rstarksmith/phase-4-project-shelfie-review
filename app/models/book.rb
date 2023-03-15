class Book < ApplicationRecord
    validates_presence_of :title, :author, :genre, :image_url
    validates :title, uniqueness: true, length: { maximum: 50 }
    validates :author, length: { maximum: 50 }

    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews

    # scope :by_title, -> { order(title: :asc) }

end
