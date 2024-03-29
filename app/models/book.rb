class Book < ApplicationRecord
    validates_presence_of :title, :author, :genre, :image_url
    validates :title, uniqueness: true, length: { maximum: 50 }
    validates :author, length: { maximum: 50 }

    has_many :reviews, -> { order(created_at: :desc)}, dependent: :destroy
    has_many :users, through: :reviews


end
