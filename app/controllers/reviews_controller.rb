class ReviewsController < ApplicationController

    
    #GET /books/:id/reviews
    def index 
        book = Book.find(params[:book_id])
        reviews = book.reviews
        render json: reviews, include: [ 'book' ], status: :ok
    end

    #GET /books/:id/reviews/:id
    def show
        # How do i make sure it shows the correct review?
        # book = Book.find(params[:book_id])
        review = Review.find(params[:id])
        render json: review, status: :ok
    end

    #POST /books/:id/reviews
    def create
    end

    #PATCH /books/:id/reviews/:id
    def update
    end

    #DELETE /books/:id/reviews/:id
    def destroy
    end

    private

    def review_params
        params.permit(:header, :commment)
    end

end
