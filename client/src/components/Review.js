
const Review = ({ review } ) => {


  return (
    <div>
      <h4>{review.header}</h4>
      <p>{review.comment}</p>
      {/* review user_id to display username */}
    </div>
  );
}

export default Review