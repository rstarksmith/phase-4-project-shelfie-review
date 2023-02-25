import { useEffect, useState } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import NavBar from "./NavBar"
import Home from "./Home"
import SignUp from "./SignUp"
import SignIn from "./SignIn"
import BookList from "./BookList"
import BookReviewPage from "./BookReviewPage"
import MyShelfie from "./MyShelfie"
import ShelfieShare from "./ShelfieShare"
import BookForm from "./BookForm"

function App() {
  // const [currentUser, setCurrentUser] = useState(null)
  const [books, setBooks] = useState([])
  const navigate = useNavigate()

    useEffect(() => {
      fetch("/books")
      .then(resp => resp.json())
      .then(data => setBooks(data))
    }, [])

    const handleAddBook = (newBook) => {
      setBooks([...books, newBook])
      navigate("/books")
    }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/books" element={<BookList books={books} />} />
        <Route path="/books/:id/reviews" element={<BookReviewPage books={books} />} />
        <Route path="/books/new" element={<BookForm handleAddBook={handleAddBook} />} />
        <Route path="/myshelfie" element={<MyShelfie />} />
        {/* conditional */}
        <Route path="/shelfieshare" element={<ShelfieShare />} />
      </Routes>
    </>
  );
}

export default App;
