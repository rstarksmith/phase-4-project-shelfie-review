import { Link } from "react-router-dom";

const Book = ({ book }) => {
  

  return (
    <div>
      <Link to={`/books/${book.id}/reviews`}>
        <img
          src={book.image_url}
          alt={book.title}
        />
      </Link>

      {/* interpolate book title in alt? */}
      <p>{book.title}</p>
    </div>
  );
};

export default Book;
