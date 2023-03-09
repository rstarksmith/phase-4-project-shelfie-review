import { useParams } from "react-router-dom"
import { useState } from "react"
import ReviewForm from "./ReviewForm"
import ReviewList from "./ReviewList"

const BookReviewPage = ( { user, books, handleAddReview, deleteReview, handleEditReview } ) => {
  const [showForm, setShowForm] = useState(false)
  const { id } = useParams();

  const currentBook = books.find((book) => book.id === +id);
 
  const hideForm = () => setShowForm(false)

  const showReviewForm = () => setShowForm(true)

  // if(!currentBook) return <h1>Book not found</h1>
  
  if (books.length === 0) {
    return <h1>Loading...</h1>;
  }
  // can change this to error state?

  return (
    <div className="rev-grid">
      <div className="book-con">
        <div>
          <img
            className="book-img"
            src={currentBook.image_url}
            alt={currentBook.title}
          />
        </div>
        <div>
          <h1 className="sub-head">{currentBook.title}</h1>
          <h5>{currentBook.author}</h5>
          <h5>{currentBook.genre}</h5>
        </div>
      </div>
      <div className="rev-con">
        <div>
          
          {showForm ? (
            <ReviewForm
              user={user}
              hideForm={hideForm}
              handleAddReview={handleAddReview}
              currentBook={currentBook}
              id={id}
            />
          ) : (
            <div>
            <h2 className="sub-head">Reviews</h2>
            <button onClick={showReviewForm} className="bttn">
              Leave a Review
            </button>
            </div>
          )}
        </div>
        <ReviewList
          user={user}
          handleEditReview={handleEditReview}
          currentReviews={currentBook.reviews}
          deleteReview={deleteReview}
        />
      </div>
    </div>
  );
}

export default BookReviewPage