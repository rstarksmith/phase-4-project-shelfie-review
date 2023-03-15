# Shelfie Share - Book reveiws and TBR shelf share 

## MVP - User can
- Sign up for account
- Log in & remain logged in
- Log out
- View list of books and their reviews
- CRUD - create, update, delete review they left
- Create book post

## Stretch
- Share shelfie post - likes
- Search books by name
- Filter books genre

## Models - See ERD.drawio
- User
- Review
- Book


route
get "/mybooks", to: reviews#mybooks

or 

class MyBooksSerializer
    attributes: :id, :summary, 

    def summary
        "#{self.object.header} - #{self.object.book.title}
    end
    <!-- you would want to map through user.id reviews in order to make display happen -->

    belongs_to :user
    belongs_to :book



def my_books
    
    render json:  .., serializer: MyBooksSerializer
end


React state
myBooks, setMyBooks

fetch('/mybooks)


