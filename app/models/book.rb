class Book < ApplicationRecord
    validates_presence_of :title, :author, :genre, :image_url
    validates :title, uniqueness: true, length: { maximum: 50 }
    # custom validation -maybe have a special function saying that if the author and title match an existing instance, then not valid
    validates :author, length: { maximum: 50 }
    # would like to add a default image for any book without?
    
    has_many :reviews
    has_many :users, through: :reviews

end
