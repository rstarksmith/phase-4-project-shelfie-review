class User < ApplicationRecord
    validates :username, presence: true, length: { in: 3..15 }

    has_many :reviews
    has_many :books, through: :reviews

    has_secure_password
end
