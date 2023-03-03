import { useState } from "react";

const ReviewForm = ({ currentBook, id }) => {
  const [formData, setFormData] = useState({
    header: "",
    comment: "",
    book_id: +id,
    user_id: 2
  })
  // link the currentuser now hardcoded, passdown currentuser


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const addReview = (e) => {
    e.preventDefault()
    console.log("formData", formData);

    fetch(`/books/${id}/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((resp) => console.log(resp));
  }


  return (
    <div>
      <h3>Share your thoughts on {currentBook.title}</h3>
      <form onSubmit={addReview}>
        <label>Review Title</label>
        <br/>
        <input
          type="text"
          name="header"
          value={formData.header}
          onChange={handleChange}
          placeholder="Example: Couldn't put it down!"
        />
        <br />
        <label>Review</label>
        <br/>
        <input
          type="text"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          placeholder="Tell readers what you thought. !No spoilers please!" 
        />
        <br />
        <button type="submit">Post Review</button>
      </form>
    </div>
  );
}

export default ReviewForm