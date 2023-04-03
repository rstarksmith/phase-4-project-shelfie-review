import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"
import BookForm from "./BookForm";
import Book from "./Book";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [showForm, setShowForm] = useState(false)
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
      fetch("/books").then((resp) => {
        if (resp.ok) {
          resp.json().then((bookData) => setBooks(bookData));
        } else {
          resp.json().then((data) => setError(data.error))
        }
      });
  }, []);


   const handleAddBook = (newBook) => {
     setBooks((prevState) => [newBook, ...prevState]);
     navigate("/books");
   };

   const toggleBookForm = () => {
    setShowForm(!showForm)
   }
  
  const bookshelf = books.map(book => <Book key={book.id} book={book} />)

  if (error) return <h1 className="header"> ⚠︎ {error}</h1>

  return (
    <div>
      {showForm ? (
        <BookForm handleAddBook={handleAddBook} noBookForm={toggleBookForm} />
      ) : (
        <>
          <div>
            <h1 className="header">Bookshelf</h1>
            <h4 className="sub-head">
              Leave a book review to help your fellow readers grow their TBR
              shelf!
            </h4>
          </div>
          <div className="center-bttn">
            <button onClick={toggleBookForm} className="bttn">
              Add a Book
            </button>
          </div>
          <div className="book-container">{bookshelf}</div>
        </>
      )}
    </div>
  );
}

export default BookList