class Book < ApplicationRecord
    validates :title, :author, :genre, :image_url,  presence: true
    validates :title, :author, length: { maximum: 50 }
    # would like to add a default image for any book without?
    

    has_many :reviews
    has_many :users, through: :reviews

end
