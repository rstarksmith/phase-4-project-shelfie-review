class BooksController < ApplicationController

    #GET /books
    def index 
        books = Book.all.order(:title)
        render json: books, status: :ok
    end

    # could insert button to find certain author with method
    #GET /books/sarahmaas
    # def find_maas 
    #     books = Book.find_author
    #     render json: books, status: :ok
    # end

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

    #PATCH /books/:id
    def liked_it
        book = Book.find(params[:id])
        book.likes += 1 
        book.save!
        render json: book.likes, status: :ok
    end

    # def destroy
    #     book = Book.find(params[:id])
    #     book.destroy
    #     head :no_content
    # end

    private

    def book_params
        params.permit(:title, :author, :genre, :image_url, :likes)
    end

    def like_params
        params.permit(:likes)
    end

end
