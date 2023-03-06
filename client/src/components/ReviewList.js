import Review from "./Review"

const ReviewList = ({ currentReviews, deleteReview, handleEditReview }) => { 


  const displayReviews = currentReviews.map(review => <Review key={review.id} review={review} deleteReview={deleteReview} handleEditReview={handleEditReview} />)

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