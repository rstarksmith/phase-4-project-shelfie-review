class BooksController < ApplicationController

    #GET /books
    def index 
        books = Book.all
        render json: books, status: :ok
    end

    # GET /book/:id/reviews
    def show 
        book = Book.find(params[:id])
        render json: book, status: :ok
    end

    #POST /books
    def create 
        book = Book.create!(book_params)
        render json: book, status: :created
    end

    private

    def book_params
        params.permit(:title, :author, :genre, :image_url)
    end

end
