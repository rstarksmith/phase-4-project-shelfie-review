import { useNavigate } from "react-router-dom";
// import { useState } from "react"

const MyShelfie = ({ user }) => {
  const navigate = useNavigate();

  console.log('user', user)


  if (!user) return <h1>Loading...</h1>;

   const myBooks = user.books.map((book) => (
     <img
       key={book.id}
       onClick={() => navigate(`/books/${book.id}`)}
       src={book.image_url}
       className="card-img"
       alt={book.title}
     />
   ));

   const myReviews = user.reviews.map((review) => (
     <p key={review.id} onClick={() => navigate(`/books/${review.book_id}`)}>
       {review.header} | {}
     </p>
   ));

  return (
    <div className="shelf-container">
      <div className="my-account">
        <div>
          <h3 className="sub-head">@{user.username}</h3>
          <img
            src={user.photo_url}
            alt="shelfie user TBR shelf"
            className="logo"
          />
          <br />
          <form>
            <label>Is it time to update your shelfie?</label>
            <input className="input" placeholder="Photo URL..." />
            <button className="bttn" type="submit">
              Update my Shelfie
            </button>
          </form>
        </div>
      </div>
      <div className="my-books">
        <h3 className="sub-head">My Books</h3>
        <div className="book-scroll">
          {myBooks}
        </div>
      </div>
      <div className="my-revs">
        <h3 className="sub-head">My Reviews</h3>
        <div className="rev-scroll">
          {myReviews}
        </div>
      </div>
    </div>
  );
};

export default MyShelfie;
