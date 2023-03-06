import { useState } from 'react'
import ReviewEditForm from "./ReviewEditForm";

const Review = ({ review, deleteReview, handleEditReview } ) => {
  const [showEditForm, setShowEditForm] = useState(false)

  const handleDeleteReview = () => {
    fetch(`/reviews/${review.id}`, {
      method: 'DELETE',
      headers: {'Content-Tpe': 'application/json'}
    })
    .then(resp => {
      // add errors
      deleteReview(review.id, review.book_id)
    })
  }

  const toggleEditForm = () => {
    setShowEditForm(!showEditForm)
  }
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