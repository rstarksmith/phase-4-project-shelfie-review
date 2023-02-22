class User < ApplicationRecord
    validates :username, 
        presence: true, 
        uniqueness: true,
        length: { in: 3..15 }, 
        format: { without: /\s/, message: "cannot contain space" }
        # check that this regex above is working
    has_many :reviews
    has_many :books, through: :reviews

    has_secure_password
end
