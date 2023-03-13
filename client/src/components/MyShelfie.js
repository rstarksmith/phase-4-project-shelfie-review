import { useNavigate } from "react-router-dom";

const MyShelfie = ({ user }) => {
  const navigate = useNavigate();

  if (!user) return <h1>User not found</h1>;

  return (
    <div className="shelf-container">
      <div className="my-account">
        <div>
          <h3 className="sub-head">@{user.username}</h3>
          <img
            src={user.photo_url}
            alt="shelfie user TBR shelf"
            className="logo"
          />
          <br />
          <form>
            <label>Is it time to update your shelfie?</label>
            <input className="input" placeholder="Photo URL..." />
            <button className="bttn" type="submit">
              Update my Shelfie
            </button>
          </form>
        </div>
      </div>
      <div className="my-books">
        <h3 className="sub-head">My Books</h3>
        <div className="book-scroll">
          {user.reviews.map((review) => (
            <img
              key={review.id}
              onClick={() => navigate(`/books/${review.book_id}`)}
              src={review.book.image_url}
              className="card-img"
              alt={review.book.title}
            />
          ))}
        </div>
      </div>
      <div className="my-revs">
        <h3 className="sub-head">My Reviews</h3>
        <div className="rev-scroll">
          {user.reviews.map((review) => (
            <p
              key={review.id}
              onClick={() => navigate(`/books/${review.book_id}`)}
            >
              {review.header} | {review.book.title}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyShelfie;
