import Review from "./Review"

const ReviewList = ({ currentReviews, deleteReview }) => { 


  const displayReviews = currentReviews.map(review => <Review key={review.id} review={review} deleteReview={deleteReview} />)

  return (
    <div>
      <h2>Reviews</h2>
      <div>
        {displayReviews}
      </div>
    </div>
  );
}

export default ReviewList