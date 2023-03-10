import { useState } from "react";

const ReviewForm = ({ user, currentBook, id, handleAddReview, hideForm }) => {
  const [formData, setFormData] = useState({
    header: "",
    comment: "",
    book_id: +id,
    user_id: user.id,
  })
  // link the currentuser now hardcoded, passdown currentuser
  const [errors, setErrors] = useState(false)

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const addReview = (e) => {
    e.preventDefault()
    fetch(`/books/${id}/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
    .then(resp => {
      if(resp.ok){
        resp.json().then(newReview => {
          handleAddReview(newReview, id)
          hideForm()
        })
      }else {
        resp.json().then(resp => setErrors(resp.errors))
      }
    });
  }
  

  return (
    <div className="form-block-r">
      <h3>Share your thoughts on {currentBook.title}</h3>
      <form onSubmit={addReview}>
        <label>Review Title:</label>
        <br />
        <input
          type="text"
          autoComplete="off"
          name="header"
          value={formData.header}
          onChange={handleChange}
          placeholder="Example: Couldn't put it down..."
          className="input"
        />
        <br />
        <label>Review:</label>
        <br />
        <textarea
          type="text"
          autoComplete="off"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          placeholder="Tell readers what you thought. No spoilers please..."
          className="input"
        />
        <br />
        <button className="bttn" type="submit">
          Post Review
        </button>
      </form>
      <button onClick={hideForm} className="bttn-flip">Cancel</button>
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

export default ReviewForm