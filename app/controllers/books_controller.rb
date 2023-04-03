class BooksController < ApplicationController

    #GET /books
    def index 
        books = Book.all.order(:title)
        render json: books, status: :ok
    end

    # GET /books/:id
    def show 
         book = Book.find(params[:id])
         render json: book, status: :ok
    end

    #POST /books
    def create 
        book = Book.create!(book_params)
        render json: book, status: :created
    end

    # def destroy - stretch admin
    #     book = Book.find(params[:id])
    #     book.destroy
    #     head :no_content
    # end

    private

    def book_params
        params.permit(:title, :author, :genre, :image_url)
    end

end
