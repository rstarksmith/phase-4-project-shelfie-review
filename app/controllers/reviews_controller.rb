class ReviewsController < ApplicationController

    def index 
        book = Book.find(params[:book_id])
        reviews = book.reviews
        render json: reviews, status: :ok
    end
    
end
