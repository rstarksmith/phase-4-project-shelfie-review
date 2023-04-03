class ReviewsController < ApplicationController
    before_action :find_review, :authorize_owner, only: [:update, :destroy]
 
    #POST /books/:book_id/reviews
    def create
        book = Book.find(params[:book_id])
        review = book.reviews.create!(review_params)
        render json: review, status: :created
    end

    #PATCH /reviews/:id
    def update
        @review.update!(review_params)
        render json: @review, status: :ok
    end

    #DELETE /reviews/:id
    def destroy
        @review.destroy!
        head :no_content
    end

    private

    def find_review
        @review = Review.find(params[:id])
    end

    def review_params
        params.permit(:header, :comment, :book_id, :user_id)
    end

    #auth for patch/delete review
    def authorize_owner
       render json: { error: "Not Authorized" }, status: :unauthorized unless @review.user_id == current_user.id
    end

end
