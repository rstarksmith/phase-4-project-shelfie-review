class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true,
        length: { in: 3..15 }, format: { without: /\s/, message: "cannot contain space" }
    validates :password, confirmation: true, length: {in: 3..20}
    validates :password_confirmation, presence: true
    validates :photo_url, presence: true    

    has_many :reviews, dependent: :destroy
    has_many :books, through: :reviews

    has_secure_password
end
