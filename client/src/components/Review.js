import { useState } from 'react'
import ReviewEditForm from "./ReviewEditForm";

const Review = ({ user, review, handleDeleteReview, handleEditReview } ) => {
  const [showEditForm, setShowEditForm] = useState(false)
  const [errors, setErrors] = useState(false)

  const deleteReview = () => {
    fetch(`/reviews/${review.id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    .then(resp => {
      if(resp.ok) {
        handleDeleteReview(review.id)
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
      <div className="rev-block">
        <h4>{review.header}</h4>
        <p>{review.comment}</p>
        <p>{review.owner}</p>
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
        <div className="rev-block">
          <h4>{review.header}</h4>
          <p>{review.comment}</p>
          <button onClick={toggleEditForm} className="rev-bttn">
            edit
          </button>
          <button onClick={deleteReview} className="rev-bttn">
            delete
          </button>
        </div>
      )}
    </div>
  );
}

export default Review