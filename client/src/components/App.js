import { Route, Routes } from "react-router-dom"
import NavBar from "./NavBar"
import Home from "./Home"
import SignUp from "./SignUp"
import SignIn from "./SignIn"
import BookList from "./BookList"
import BookReviewPage from "./BookReviewPage"
import MyShelfie from "./MyShelfie"
import ShelfieShare from "./ShelfieShare"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/books/" element={<BookReviewPage />} />
        <Route path="/myshelfie" element={<MyShelfie />} />
        <Route path="/shelfieshare" element={<ShelfieShare />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
