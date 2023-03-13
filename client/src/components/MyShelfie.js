import { useNavigate } from "react-router-dom";

const MyShelfie = ({ user }) => {
  const navigate = useNavigate()







  if (!user) return <h1>User not found</h1>
  
  return (
    <div>
      <h1 className="header">@{user.username}</h1>
      <div>
        <h3 className="sub-head">My Shelfie</h3>
        <img
          src={user.photo_url}
          alt="shelfie user TBR shelf"
          className="logo"
        />
      </div>
      <div>
        <h3 className="sub-head">My Reviews</h3>
        {user.reviews.map((review) => (
          <p key={review.id} onClick={() => navigate(`/books/${review.book_id}`)}>
            {review.my_list}
          </p>
        ))}
      </div>
      <div>
        <h3 className="sub-head">My Books</h3>
        {user.books.map((book) => (
          <img
            key={book.id}
            onClick={() => navigate(`/books/${book.id}`)}
            src={book.image_url}
            className="card-img"
            alt={book.title}
          />
        ))}
      </div>
    </div>
  );
}

export default MyShelfie