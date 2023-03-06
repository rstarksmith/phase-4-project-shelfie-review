import { useNavigate } from "react-router-dom";

const Book = ({ book }) => {
  const navigate = useNavigate()


  return (
    <div>
      <img
        className="card-img"
        onClick={() => navigate(`/books/${book.id}`)}
        src={book.image_url}
        alt={book.title}
      />
    </div>
  );
};

export default Book;


