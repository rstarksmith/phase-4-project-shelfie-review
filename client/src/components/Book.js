import { useNavigate } from "react-router-dom"

const Book = ( { book } ) => {
  const navigate = useNavigate()

  return (
    <div key={book.id}>
      <img
        onClick={() => navigate(`/books/${book.id}/reviews`)}
        src={book.image_url}
        alt={book.title}
      />
      {/* interpolate book title in alt? */}
      <p>{book.title}</p>
    </div>
  );
};

export default Book;
