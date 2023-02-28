import Review from "./Review"

const ReviewList = ({ currentReviews }) => { 



  const displayReviews = currentReviews.map(review => <Review key={review.id} review={review} />)

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