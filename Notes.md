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
- Share shelfie post - likes
- Search books by name
- Filter books genre
- Option not to share photo

## Models - See ERD.drawio
- User
- Review
- Book

 
custom serializer
class UserPhotoSerializer
    attributes: :id, :username, :photo_url

def index
    users = User.all
    render json: users, serializer: UserPhotoSerializer
end

alphabetic order for books(scope?)



