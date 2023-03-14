import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import BookList from "./BookList";
import BookReviewPage from "./BookReviewPage";
import MyShelfie from "./MyShelfie";
import ShelfieShare from "./ShelfieShare";
import BookForm from "./BookForm";

function App() {
  const [user, setUser] = useState(null);
  const [books, setBooks] = useState([]);
  const [errors, setErrors] = useState(false);
  const navigate = useNavigate();

  // auto login
  useEffect(() => {
    fetch("/myshelfie")
    .then((resp) => {
      if (resp.ok) {
        resp.json()
        .then((user) => setUser(user))
      } 
    });
  }, []);

  useEffect(() => {
    fetch("/books")
      .then((resp) => {
        if (resp.ok) {
          resp.json().then(setBooks);
        } else {
          resp.json().then((resp) => setErrors(resp.errors));
        }
      });
  }, []);

  const logInUser = (newUser) => {
    setUser(newUser);
    navigate("/myshelfie");
  };

  const logOut = () => {
    fetch("/logout", {
      method: "DELETE",
    });
    setUser(null);
    navigate("/");
  };

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
    navigate("/books");
  };

  
  const handleAddReview = (newReview, id) => {
    // const book_id = +id
    // take get books out of code block so all functions can use it
    // create funtion that will take a variable and map through
    const theBook = books.find((book) => book.id === +id);
    const addNewReview = [...theBook.reviews, newReview];
    const updatedReviews = books.map((book) => {
      if (book.id === +id) {
        return {
          ...book,
          reviews: addNewReview,
        };
      } else return book;
    });
    setBooks(updatedReviews);
  };

  
  const deleteReview = (deletedReview, book_id) => {
    const getBook = books.find((book) => book.id === book_id);
    const removeReview = getBook.reviews.filter(
      (review) => review.id !== deletedReview
    );
    const adjustedReview = books.map((book) => {
      if (book.id === book_id) {
        return {
          ...book,
          reviews: removeReview,
        };
      } else return book;
    });
    setBooks(adjustedReview);
  };

  const handleEditReview = (updatedReview, book_id) => {
    const getBook = books.find((book) => book.id === book_id);
    const editReviews = getBook.reviews.map((review) => {
      if (review.id === updatedReview.id) {
        return updatedReview;
      } else {
        return review;
      }
    });
    const changeReview = books.map((book) => {
      if (book.id === book_id) {
        return {
          ...book,
          reviews: editReviews,
        };
      } else return book;
    });
    setBooks(changeReview);
  };


  if (errors) return <h1>{errors}</h1>;

  return (
    <>
      <NavBar user={user} logOut={logOut} />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/signup" element={<SignUp logInUser={logInUser} />} />
        <Route path="/signin" element={<SignIn logInUser={logInUser} />} />
        <Route path="/books" element={<BookList books={books} />} />
        <Route
          path="/books/:id"
          element={
            <BookReviewPage
              user={user}
              deleteReview={deleteReview}
              handleAddReview={handleAddReview}
              handleEditReview={handleEditReview}
              books={books}
            />
          }
        />
        <Route
          path="/books/new"
          element={<BookForm handleAddBook={handleAddBook} />}
        />
        <Route path="/myshelfie" element={<MyShelfie user={user} />} />
        <Route path="/shelfieshare" element={<ShelfieShare />} />
      </Routes>
    </>
  );
}

export default App;
