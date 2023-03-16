class ReviewsController < ApplicationController

    before_action :find_review, :authorize_owner, only: [:update, :destroy]
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
        review.update!(review_params)
        render json: review, status: :ok
    end

    # #DELETE /reviews/:id
    def destroy
        review.destroy!
        head :no_content
    end

    private

    def find_review
        review = Review.find(params[:id])
    end

    def review_params
        params.permit(:header, :comment, :book_id, :user_id)
    end

    def authorize_owner
        raise "Unauthorized" if review.user_id != current_user.id
    end

    # render json: { error: "Not authorized" }, status: :unauthorized
end
