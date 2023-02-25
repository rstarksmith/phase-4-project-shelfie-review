import { useNavigate } from "react-router-dom";
import Book from "./Book";

const BookList = ( { books } ) => {
  const navigate = useNavigate()

  const bookshelf = books.map(book => <Book key={book.id} book={book} />)
  
  return (
    <div>
      <div>
        <h1>Review a Book</h1>
        <h4>
          Leave a book review to help your fellow readers grow their TBR shelf!
        </h4>
      </div>
      <button onClick={() => navigate("/books/new")}>Add a Book</button>
      <div>
        {bookshelf}
      </div>
    </div>
  );
}

export default BookList