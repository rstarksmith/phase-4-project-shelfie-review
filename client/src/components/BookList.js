import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"
import BookReviewPage from "./BookReviewPage";
import MyShelfie from "./MyShelfie";
import BookForm from "./BookForm";
import Book from "./Book";

const BookList = ( {user } ) => {
  const [books, setBooks] = useState([]);
  const [showForm, setShowForm] = useState(false)
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate()

  

  useEffect(() => {
    if (user) {
      fetch("/books").then((resp) => {
        if (resp.ok) {
          resp.json().then((bookData) => setBooks(bookData));
        } else {
          resp.json().then((resp) => setErrors(resp.errors));
        }
      });
    }
  }, [user]);

   const handleAddBook = (newBook) => {
     setBooks((prevState) => [newBook, ...prevState]);
     navigate("/books");
   };

   const handleAddReview = (newReview, id) => {
     const theBook = books.find((book) => book.id === +id);
     const addNewReview = [newReview, ...theBook.reviews];
     const updatedReviews = books.map((book) => {
       if (book.id === +id) {
         return {
           ...book,
           reviews: addNewReview,
         };
       } else return book;
     });
     setBooks(updatedReviews);
   };

   const deleteReview = (deletedReview, book_id) => {
     const getBook = books.find((book) => book.id === book_id);
     const removeReview = getBook.reviews.filter(
       (review) => review.id !== deletedReview
     );
     const adjustedReview = books.map((book) => {
       if (book.id === book_id) {
         return {
           ...book,
           reviews: removeReview,
         };
       } else return book;
     });
     setBooks(adjustedReview);
   };

   // const deleteRevUser = (deletedReview) => {
   //  const removeRev = user.reviews.filter(review => review.id !== deletedReview)
   //  setUser((prevState) =>({...prevState, reviews: removeRev }))
   // }

   const handleEditReview = (updatedReview, book_id) => {
     const getBook = books.find((book) => book.id === book_id);
     const editReviews = getBook.reviews.map((review) => {
       if (review.id === updatedReview.id) {
         return updatedReview;
       } else {
         return review;
       }
     });
     const changeReview = books.map((book) => {
       if (book.id === book_id) {
         return {
           ...book,
           reviews: editReviews,
         };
       } else return book;
     });
     setBooks(changeReview);
   };

  const bookshelf = books.map(book => <Book key={book.id} book={book} />)
  
  if (errors) return <h1>{errors}</h1>

  return (
    <div>
      {!showForm ? 
        (<>
        <div>
          <h1 className="header">Bookshelf</h1>
          <h4 className="sub-head">
            Leave a book review to help your fellow readers grow their TBR shelf!
          </h4>
        </div>
        <div className="center-bttn">
          <button onClick={setShowForm(true)} className="bttn">
            Add a Book
          </button>
        </div>
        <div className="book-container">{bookshelf}</div>
        </>
  ) : (
    <BookForm  />
  )}
    </div>
  );
}

export default BookList