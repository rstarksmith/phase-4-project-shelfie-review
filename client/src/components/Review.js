import { useState } from 'react'
import ReviewEditForm from "./ReviewEditForm";

const Review = ({ user, review, deleteReview, handleEditReview } ) => {
  const [showEditForm, setShowEditForm] = useState(false)
  const [errors, setErrors] = useState(false)

  const handleDeleteReview = () => {
    fetch(`/reviews/${review.id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    .then(resp => {
      if(resp.ok) {
        deleteReview(review.id, review.book_id)
      } else {
        resp.json().then(resp => setErrors(resp.errors))
      } 
    })
  }

  const toggleEditForm = () => {
    setShowEditForm(!showEditForm)
  }

  

  if(errors) return <h1>{errors}</h1>

  if (review.user_id !== user.id)
    return (
      <div>
        <h4>{review.header}</h4>
        <p>{review.comment}</p>
      </div>
    );

  return (
    <div>
      {showEditForm ? (
        <ReviewEditForm
          user={user}
          review={review}
          toggleEditForm={toggleEditForm}
          handleEditReview={handleEditReview}
        />
      ) : (
        <div>
          <h4>{review.header}</h4>
          <p>{review.comment}</p>
            <button onClick={toggleEditForm} className="rev-bttn">
              edit
            </button>
            <button onClick={handleDeleteReview} className="rev-bttn">
              delete
            </button> 
        </div>
      )}
    </div>
  );
}

export default Review