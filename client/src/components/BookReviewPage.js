import { useParams } from "react-router-dom"
import { useState } from "react"
import ReviewForm from "./ReviewForm"
import Review from "./Review"

const BookReviewPage = ( { user, books, handleAddReview, deleteReview, handleEditReview } ) => {
  const [showForm, setShowForm] = useState(false)
  const { id } = useParams();

  const currentBook = books.find((book) => book.id === +id);

  const currentReviews = currentBook.reviews;
 
  const hideForm = () => setShowForm(false)

  const showReviewForm = () => setShowForm(true)

  

  const displayReviews = currentReviews.map((review) => (
    <Review
      key={review.id}
      user={user}
      review={review}
      deleteReview={deleteReview}
      handleEditReview={handleEditReview}
    />
  ));
  
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
          <h1 className="rev-header">{currentBook.title}</h1>
          <h4>Author: {currentBook.author}</h4>
          <h4>Genre: {currentBook.genre}</h4>
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
              <h2 className="rev-header">Reviews</h2>
              <button onClick={showReviewForm} className="add-rev-bttn">
                Leave a Review
              </button>
            </div>
          )}
        </div>
        <div>{displayReviews}</div>
      </div>
    </div>
  );
}

export default BookReviewPage