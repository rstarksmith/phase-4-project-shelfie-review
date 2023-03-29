class Book < ApplicationRecord
    validates_presence_of :title, :author, :genre, :image_url
    validates :title, uniqueness: true, length: { maximum: 50 }
    validates :author, length: { maximum: 50 }

    # scope :find_author, -> { where(:author => 'Sarah J. Maas')}

    has_many :reviews, -> { order(created_at: :desc)}, dependent: :destroy
    # scope keeps order of reviews current at the top
    has_many :users, through: :reviews

    

end
