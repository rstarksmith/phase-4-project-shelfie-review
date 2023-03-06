import { useState } from "react"

const ReviewEditForm = ({ review, handleEditReview, toggleEditForm }) => {
  const { id, book_id } = review
  const [editFormData, setEditFormData] = useState(review)
  const [errors, setErrors] = useState(false)

  const handleEditChange = (e) => {
    const { name, value } = e.target
    setEditFormData({...editFormData, [name]: value})
  }

  const editReview = (e) => {
    e.preventDefault()
    fetch(`/reviews/${id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(editFormData),
    })
    .then(resp => {
      if(resp.ok){
        resp.json().then(updatedReview => {
          handleEditReview(updatedReview, book_id)
          toggleEditForm()
        })
      }else {
        resp.json().then(resp => setErrors(resp.errors))
      }
    })
  }


  return (
    <div>
      <h3>Edit your Review:</h3>
      <form onSubmit={editReview}>
        <label>Review Title</label>
        <br />
        <input
          type="text"
          name="header"
          value={editFormData.header}
          onChange={handleEditChange}
        />
        <br />
        <label>Review</label>
        <br />
        <input
          type="text"
          name="comment"
          value={editFormData.comment}
          onChange={handleEditChange}
        />
        <br />
        <button type="submit">Update Review</button>
      </form>
      <button onClick={toggleEditForm}>Cancel</button>
      {errors
        ? Object.entries(errors).map(([key, value]) => (
            <p>
              {key} {value}
            </p>
          ))
        : null}
    </div>
  );
}

export default ReviewEditForm