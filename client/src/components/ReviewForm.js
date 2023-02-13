import React from 'react'

const ReviewForm = () => {
  return (
    <div>
      <h3>Share your thoughts on book title</h3>
      <form>
        <label>Review Title</label>
        <br/>
        <input
          type="text"
          name="header"
          // value={header}
          // onChange={handleChange}
          placeholder="Example: Couldn't put it down!"
        />
        <br />
        <label>Review</label>
        <br/>
        <input
          type="text"
          name="comment"
          // value={comment}
          // onChange={handleChange}
          placeholder="Tell readers what you thought. !No spoilers please!" 
        />
        <br />
        <button>Post Review</button>
      </form>
    </div>
  );
}

export default ReviewForm