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
    fetch("/auth")
    .then((resp) => {
      if (resp.ok) {
        resp.json()
        .then((newUser) => {
          setUser(newUser)
        })
      }
    })
  }, []);

  const logInUser = (userObj) => {
    console.log(userObj)
    setUser(userObj);
    navigate("/");
  };

  const logOut = () => {
    fetch("/logout", {
      method: "DELETE",
    })
    .then(resp => {
      if(resp.ok){
        setUser(null)
      }
    })
    navigate("/");
  };
 
 

  return (
    <>
      <NavBar user={user} logOut={logOut} />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/signup" element={<SignUp logInUser={logInUser} />} />
        <Route path="/signin" element={<SignIn logInUser={logInUser} />} />
        <Route path="/books" element={<BookList user={user} />} />
        <Route path="/books/:id" element={<BookReviewPage user={user} /> } />
        <Route path="/profile" element={<MyShelfie user={user} />} />
        <Route path="/shelfieshare" element={<ShelfieShare />} />
      </Routes>
    </>
  );
}

export default App;
