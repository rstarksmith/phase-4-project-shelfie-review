import { useState } from "react"

const ReviewEditForm = ({ review }) => {
  const [editFormData, setEditFormData] = useState(review)

  const handleEditChange = () => {

  }

  const editReview = () => {

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
    </div>
  );
}

export default ReviewEditForm