class User < ApplicationRecord
    validates :username, presence: true,  on: [:create, :show]
    validates :username, uniqueness: true, length: { in: 3..15 }, format: { without: /\s/, message: "cannot contain space" }, on: :create
    validates :password, confirmation: true, length: {in: 3..20}, on: [:create, :show]
    validates :password_confirmation, presence: true, on: :create
    validates :photo_url, presence: true  
    

    has_many :reviews, dependent: :destroy
    has_many :books, through: :reviews

    has_secure_password
end
