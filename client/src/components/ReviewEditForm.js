import { useState } from "react"

const ReviewEditForm = ({ user, review, handleEditReview, toggleEditForm }) => {
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
    <div className="form-block-r-b">
      <form onSubmit={editReview}>
        <label>Review Title:</label>
        <br />
        <input
          type="text"
          autoComplete="off"
          name="header"
          value={editFormData.header}
          onChange={handleEditChange}
          className="input"
        />
        <br />
        <label>Review:</label>
        <br />
        <textarea
          type="text"
          autoComplete="off"
          name="comment"
          value={editFormData.comment}
          onChange={handleEditChange}
          className="input"
        />
        <br />
        <button className="bttn" type="submit">
          Update Review
        </button>
      </form>
      <button onClick={toggleEditForm} className="bttn-flip">
        Cancel
      </button>
      {errors
        ? Object.entries(errors).map(([key, value]) => (
            <p className="err">
              ▸ {key} {value}
            </p>
          ))
        : null}
    </div>
  );
}

export default ReviewEditForm