import Review from "./Review"

const ReviewList = ({ user, currentReviews, deleteReview, handleEditReview }) => { 


  const displayReviews = currentReviews.map(review => <Review key={review.id} user={user} review={review} deleteReview={deleteReview} handleEditReview={handleEditReview} />)

  return (
    <div>
      {displayReviews}
    </div>
  );
}

export default ReviewList