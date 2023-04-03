import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

const BookReviewPage = ({
  user,
  addBookToShelf,
  addBookRev,
  removeFromShelf,
  updateUserRev,
}) => {
  const [book, setBook] = useState();
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();


  useEffect(() => {
      fetch(`/books/${id}`).then((resp) => {
        if (resp.ok) {
          resp.json().then((bookData) => setBook(bookData));
        } else {
          resp.json().then((resp) => setError(resp.error));
        }
      });
  }, [user, id]);
  
  console.log(book)

  const hideForm = () => setShowForm(false);

  const showReviewForm = () => setShowForm(true);

  if(!user || error) {
    return <h1 className="header">⚠︎ {error}</h1>;
  }

  if (!book) {
    return <h1 className="header">Loading...</h1>;
  }
  
  const handleAddReview = (newReview) => {
    setBook((prevState) => ({
      ...prevState,
      reviews: [newReview, ...book.reviews],
    }));
    addBookToShelf(book);
  };

  const handleDeleteReview = (deletedRevId) => {
    const removeReview = book.reviews.filter(
      (review) => review.id !== deletedRevId
    );
    setBook((prevState) => ({ ...prevState, reviews: removeReview }));
    removeFromShelf(book);
  };

  const handleEditReview = (updatedReview) => {
    const updateReviews = book.reviews.map((review) => {
      if (review.id === updatedReview.id) {
        return updatedReview;
      } else {
        return review;
      }
    });
    setBook((prevState) => ({ ...prevState, reviews: updateReviews }));
  };

  return (
    <div className="rev-grid">
      <div className="book-con">
        <div>
          <img className="book-img" src={book.image_url} alt={book.title} />
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
              handleAddReview={handleAddReview}
              currentBook={book}
              id={id}
              addBookToShelf={addBookToShelf}
              addBookRev={addBookRev}
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
        <ReviewList
          user={user}
          handleEditReview={handleEditReview}
          currentReviews={book.reviews}
          handleDeleteReview={handleDeleteReview}
          updateUserRev={updateUserRev}
        />
      </div>
    </div>
  );
};

export default BookReviewPage;
