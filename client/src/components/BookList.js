import { useNavigate } from "react-router-dom";
import Book from "./Book";

const BookList = ( { books } ) => {
  const navigate = useNavigate()

  const bookshelf = books.map(book => <Book key={book.id} book={book} />)
  
  return (
    <div>
      <div>
        <h1 className="header">Bookshelf</h1>
        <h4 className="sub-head">
          Leave a book review to help your fellow readers grow their TBR shelf!
        </h4>
      </div>
      <div className="center-bttn">
        <button onClick={() => navigate("/books/new")} className="bttn">
          Add a Book
        </button>
      </div>
      <div className="card-container">{bookshelf}</div>
    </div>
  );
}

export default BookList