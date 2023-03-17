import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import ShelfieShare from "./ShelfieShare";
import BookList from "./BookList";
import BookReviewPage from "./BookReviewPage";
import MyShelfie from "./MyShelfie";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/auth").then((resp) => {
      if (resp.ok) {
        resp.json().then((newUser) => {
          setUser(newUser);
        });
      }
    });
  }, []);

  const logInUser = (userObj) => {
    console.log(userObj);
    setUser(userObj);
    navigate("/");
  };

  const logOut = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then((resp) => {
      if (resp.ok) {
        setUser(null);
      }
    });
    navigate("/");
  };


  const addBookToShelf = (book) => {
     setUser((prevState) => ({...prevState, books: [book, ...user.books]}))
  }

  const addBookRev = (newReview) => { 
    setUser((prevState) => ({ ...prevState, reviews: [...user.reviews, newReview]}));
  }

  const removeFromShelf = (deletedBook) => {
    const editedBooks = user.books.filter((book) => book.id !== deletedBook.id)
    setUser((prevState) => ({...prevState, books: editedBooks}))
  }

  //add code to change user state for review updates for possible future use on profile
  const updateUserRev = (updatedRev) => {
    const updatedReviews = user.reviews.map((review) => {
      if(review.id === updatedRev.id) {
        return updatedRev
      } else {
        return review
      }
    })
    setUser(prevState => ({...prevState, reviews: updatedReviews}))
    console.log(updatedReviews)
  }


  const updateUserPhoto = (userObj) => {
    setUser(userObj);
  };

  return (
    <>
      <NavBar user={user} logOut={logOut} />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/signup" element={<SignUp logInUser={logInUser} />} />
        <Route path="/signin" element={<SignIn logInUser={logInUser} />} />
        <Route path="/books" element={<BookList user={user} />} />
        <Route
          path="/books/:id"
          element={
            <BookReviewPage user={user} removeFromShelf={removeFromShelf} updateUserRev={updateUserRev} addBookToShelf={addBookToShelf} addBookRev={addBookRev}/>
          }
        />
        <Route
          path="/profile"
          element={
            <MyShelfie
              user={user}
              closeAccount={setUser}
              updateUserPhoto={updateUserPhoto}
            />
          }
        />
        <Route path="/shelfieshare" element={<ShelfieShare />} />
      </Routes>
    </>
  );
}

export default App;
