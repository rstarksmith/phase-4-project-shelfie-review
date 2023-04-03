# Shelfie Share - Book reveiws and TBR shelf share 

## MVP - User can
- Sign up for account
- Log in & remain logged in
- Log out
- View list of books and their reviews
- View users shared photos
- CRUD - create, update, delete review 
- Create book
- Update user photo

## Stretch
- Add Admin to be able to delete books, access to other features
- Share shelfie post - likes
- Search books by name
- Filter books genre


## Models - See ERD.drawio
- User
- Review
- Book

 
Refactoring
book.id, user.id.. current_user 


has_many :reviews
current_user.reviews
Review.create(user_id: current_user.id)
header: , comment: , book_id: 



