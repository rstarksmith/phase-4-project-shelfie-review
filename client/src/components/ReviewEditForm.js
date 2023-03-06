import { useState } from "react"

const ReviewEditForm = ({ review, handleEditReview, toggleEditForm }) => {
  const { id, book_id } = review
  const [editFormData, setEditFormData] = useState(review)

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
    .then(resp => resp.json())
    .then(updatedReview => {
      handleEditReview(updatedReview, book_id)
      toggleEditForm()
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
    </div>
  );
}

export default ReviewEditForm