import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ReviewForm from "./ReviewForm"
import ReviewList from "./ReviewList"

const BookReviewPage = ( { user, /*books, handleAddReview, deleteReview, handleEditReview */} ) => {
  const [showForm, setShowForm] = useState(false)
  const { id } = useParams();
  const [book, setBook] = useState();

  useEffect(() => {
    if (user) {
      fetch(`/books/${id}`).then((resp) => {
        if (resp.ok) {
          resp.json().then((bookData) => setBook(bookData));
        } else {
          //resp.json().then((resp) => setErrors(resp.errors));
        }
      });
    }
  }, [user, id])
  //const currentBook = books.find((book) => book.id === +id);

  console.log(book)
 
  const hideForm = () => setShowForm(false)

  const showReviewForm = () => setShowForm(true)

  // if(!currentBook) return <h1>Book not found</h1>
  
  if (!book) {
    return <h1>Loading...</h1>;
  }
  // can change this to error state?

  return (
    <div className="rev-grid">
      <div className="book-con">
        <div>
          <img
            className="book-img"
            src={book.image_url}
            alt={book.title}
          />
        </div>
        <div>
          <h1 className="rev-header">{book.title}</h1>
          <h4>Author: {book.author}</h4>
          <h4>Genre: {book.genre}</h4>
        </div>
      </div>
      <div className="rev-con">
        <div>
          {showForm ? (
            <ReviewForm
              user={user}
              hideForm={hideForm}
              //handleAddReview={handleAddReview}
              currentBook={book}
              id={id}
            />
          ) : (
            <div>
            <h2 className="rev-header">Reviews</h2>
            <button onClick={showReviewForm} className="add-rev-bttn">
              Leave a Review
            </button>
            </div>
          )}
        </div>
        {/*<ReviewList
          user={user}
          handleEditReview={handleEditReview}
          currentReviews={currentBook.reviews}
          deleteReview={deleteReview}
          />*/}
      </div>
    </div>
  );
}

export default BookReviewPage