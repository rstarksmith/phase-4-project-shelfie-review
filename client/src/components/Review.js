import { useState } from 'react'
import ReviewEditForm from "./ReviewEditForm";

const Review = ({ user, review, deleteReview, handleEditReview } ) => {
  const [showEditForm, setShowEditForm] = useState(false)
  // const [showButtons, setShowButtons] = useState(false)
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

  // const showButtons = (review) => {
  //   if (review.user_id === user.id) {
  //     setShowButtons(true)
  //   }else {
  //     setShowButtons(false)
  //   }
  // };

  if(errors) return <h1>{errors}</h1>

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
        <>
          <h4>{review.header}</h4>
          <p>{review.comment}</p>
          <p></p>

          <button onClick={toggleEditForm} className="bttn">
            edit
          </button>
          <button onClick={handleDeleteReview} className="bttn">
            delete
          </button>
        </>
      )}
    </div>
  );
}

export default Review