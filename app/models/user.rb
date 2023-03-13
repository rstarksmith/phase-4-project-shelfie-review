class User < ApplicationRecord
    validates :username, 
        presence: true, 
        uniqueness: true,
        length: { in: 3..15 }, 
        format: { without: /\s/, message: "cannot contain space" }

    validates :photo_url, presence: true    
    has_many :reviews
    has_many :books, through: :reviews

    has_secure_password
end
