import ReviewForm from "./ReviewForm"

const BookReviewPage = () => {

  return (
    <div>
      <div>
        <h1>title of book</h1>
        {/* book image */}
      </div>
      <div>
        <h2>Reviews</h2>
        {/* showform / hideform */}
      </div>
      <button>Leave a Review</button>
      <ReviewForm />
    </div>
  );
}

export default BookReviewPage