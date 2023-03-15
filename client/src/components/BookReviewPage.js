import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ReviewForm from "./ReviewForm"
import ReviewList from "./ReviewList"

const BookReviewPage = ( { user, /* handleAddReview, deleteReview, handleEditReview */} ) => {
  const [book, setBook] = useState();
  const [showForm, setShowForm] = useState(false)
  const [errors, setErrors] = useState(false)
  const { id } = useParams();
  

  useEffect(() => {
    if (user) {
      fetch(`/books/${id}`).then((resp) => {
        if (resp.ok) {
          resp.json().then((bookData) => setBook(bookData));
        } else {
          resp.json().then((resp) => setErrors(resp.errors));
        }
      });
    }
  }, [user, id])
 
  const hideForm = () => setShowForm(false)

  const showReviewForm = () => setShowForm(true)
  
  if (!book) {
    return <h1>Loading...</h1>;
  } 
  // loading state?

   const handleAddReview = (newReview) => {
    setBook((prevState) => ({...prevState, reviews: [newReview, ...book.reviews]}))
   }
   
   const handleDeleteReview = (deletedRevId) => {
     const removeReview = book.reviews.filter(
       (review) => review.id !== deletedRevId
     );
     setBook((prevState) => ({ ...prevState, reviews: removeReview }));
   };

  //  // const deleteRevUser = (deletedReview) => {
  //  //  const removeRev = user.reviews.filter(review => review.id !== deletedReview)
  //  //  setUser((prevState) =>({...prevState, reviews: removeRev }))
  //  // }

  const handleEditReview = (updatedReview) => {
    const updateReviews = book.reviews.map((review) => {
      if (review.id === updatedReview.id) {
        return updatedReview 
      }else {
        return review
      }
    })
    setBook((prevState) => ({...prevState, reviews: updateReviews}))
  }
  
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
              handleAddReview={handleAddReview}
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
        <ReviewList
          user={user}
          handleEditReview={handleEditReview}
          currentReviews={book.reviews}
          handleDeleteReview={handleDeleteReview}
          />
      </div>
    </div>
  );
}

export default BookReviewPage