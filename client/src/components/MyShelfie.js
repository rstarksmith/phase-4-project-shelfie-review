// import { useNavigate } from "react-router-dom";
// import { useState } from "react"

const MyShelfie = ({ user, books }) => {
  
  // const navigate = useNavigate();

  // ?add use effect to run any time this page is loaded?

  // const myBooks = user.reviews.map((review) => (
  //   <img
  //     key={review.id}
  //     onClick={() => navigate(`/books/${review.book_id}`)}
  //     src={review.book?.image_url}
  //     className="card-img"
  //     alt={review.book?.title}
  //   />
  // ));

  // const myReviews = user.reviews.map((review) => (
  //   <p key={review.id} onClick={() => navigate(`/books/${review.book_id}`)}>
  //     {review.header} | {review.book?.title}
  //   </p>
  // ));
  // const filterReviews = books.map(book => book.reviews)
  // console.log(filterReviews)
  // const allReviews = filterReviews.flat(Infinity)
  // console.log(allReviews)
  // const myReviews = allReviews.filter(review => {
  //   if (review.user_id === user.id) {
  //     return review
  //   }
  // })
  // console.log(myReviews)



  if (!user) return <h1>User not found</h1>;


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
          {/* {myBooks} */}
        </div>
      </div>
      <div className="my-revs">
        <h3 className="sub-head">My Reviews</h3>
        <div className="rev-scroll">
          {/* {myReviews} */}
        </div>
      </div>
    </div>
  );
};

export default MyShelfie;
