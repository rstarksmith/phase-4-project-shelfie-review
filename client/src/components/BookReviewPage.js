import { useParams } from "react-router-dom";
import { useState } from "react"
import ReviewForm from "./ReviewForm"
import ReviewList from "./ReviewList";

const BookReviewPage = ( { books, handleAddReview } ) => {
  const [showForm, setShowForm] = useState(false)
  const { id } = useParams()

  
  const currentBook = books.find(book => book.id === +id)

  const hideForm = () => setShowForm(false)

  const showReviewForm = () => setShowForm(true)

  if(!currentBook) return <h1>Book not found</h1>
  
  if (books.length === 0) {
    return <h1>Loading...</h1>;
  }
  // can change this to error state?

  return (
    <div>
      <div>
        <h1>{currentBook.title}</h1>
      </div>
      <div>
        <img
          className="book-img"
          src={currentBook.image_url}
          alt={currentBook.title}
        />
      </div>
      <div>
        <ReviewList currentReviews={currentBook.reviews} />
      </div>
      {showForm ? (
        <ReviewForm hideForm={hideForm} handleAddReview={handleAddReview} currentBook={currentBook} id={id} />
      ) : (
        <button onClick={showReviewForm}>Leave a Review</button>
      )}
    </div>
  );
}

export default BookReviewPage