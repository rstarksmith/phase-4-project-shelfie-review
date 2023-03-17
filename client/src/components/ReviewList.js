import Review from "./Review"

const ReviewList = ({ user, currentReviews, handleDeleteReview, handleEditReview, updateUserRev }) => { 

  const displayReviews = currentReviews.map(review => <Review key={review.id} user={user} updateUserRev={updateUserRev} review={review} handleDeleteReview={handleDeleteReview} handleEditReview={handleEditReview} />)


  return (
    <>
      {displayReviews}
    </>
  );
}

export default ReviewList