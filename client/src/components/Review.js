import { useState } from 'react'
import ReviewEditForm from "./ReviewEditForm";

const Review = ({ review, deleteReview, handleEditReview } ) => {
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

  return (
    <div>
      {showEditForm ? (
        <ReviewEditForm
          review={review}
          toggleEditForm={toggleEditForm}
          handleEditReview={handleEditReview}
        />
      ) : (
        <>
          <h4>{review.header}</h4>
          <p>{review.comment}</p>
          <button onClick={toggleEditForm}>edit</button>
          <button onClick={handleDeleteReview}>delete</button>
        </>
      )}
    </div>
  );
}

export default Review