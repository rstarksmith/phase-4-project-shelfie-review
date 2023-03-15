class ReviewsController < ApplicationController

    # #GET /reviews
    # def index
    #     reviews = Review.all
    #     render json: reviews, status: :ok
    # end

    #POST /books/:book_id/reviews
    def create
        book = Book.find(params[:book_id])
        review = book.reviews.create!(review_params)
        render json: review, status: :created
    end

    #PATCH /reviews/:id
    def update
        review = Review.find(params[:id])
        review.update!(review_params)
        render json: review, status: :ok
    end

    # #DELETE /reviews/:id
    def destroy
        review = Review.find(params[:id])
        review.destroy
        head :no_content
    end

    private

    def review_params
        params.permit(:header, :comment, :book_id, :user_id)
    end

end
