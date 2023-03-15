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


get "/mybooks", to: user#mybooks

can I have two that go to the show route?

in users controller

def my_books
    current user
    render json: user.. 
end


