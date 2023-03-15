import Review from "./Review"

const ReviewList = ({ user, currentReviews, handleDeleteReview, handleEditReview }) => { 

  const displayReviews = currentReviews.map(review => <Review key={review.id} user={user} review={review} handleDeleteReview={handleDeleteReview} handleEditReview={handleEditReview} />)


  return (
    <>
      {displayReviews}
    </>
  );
}

export default ReviewList