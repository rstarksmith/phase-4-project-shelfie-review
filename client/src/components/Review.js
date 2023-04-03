import { useState } from "react";
import ReviewEditForm from "./ReviewEditForm";

const Review = ({
  user,
  review,
  handleDeleteReview,
  handleEditReview,
  updateUserRev,
}) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [errors, setErrors] = useState(false);

  const deleteReview = () => {
    fetch(`/reviews/${review.id}`, {
      method: "DELETE"
    }).then((resp) => {
      if (resp.ok) {
        handleDeleteReview(review.id);
      } else {
        resp.json().then((resp) => setErrors(resp.errors));
      }
    });
  };

  const toggleEditForm = () => {
    setShowEditForm(!showEditForm);
  };

  // if (!user) return <h1 className="header">Loading...</h1>;
  if (errors) return <h1 className="header">{errors}</h1>;

  if (review.user_id !== user.id)
    return (
      <div className="rev-block">
        <h4>{review.header}</h4>
        <p>{review.comment}</p>
        <p>{review.owner}</p>
      </div>
    );

  return (
    <div>
      {showEditForm ? (
        <ReviewEditForm
          user={user}
          review={review}
          toggleEditForm={toggleEditForm}
          handleEditReview={handleEditReview}
          updateUserRev={updateUserRev}
        />
      ) : (
        <div className="rev-block">
          <h4>{review.header}</h4>
          <p>{review.comment}</p>
          <p>{review.owner}</p>
          <button onClick={toggleEditForm} className="rev-bttn">
            edit
          </button>
          <button onClick={deleteReview} className="rev-bttn">
            delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Review;
