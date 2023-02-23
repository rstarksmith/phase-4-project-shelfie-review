import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import ReviewForm from "./ReviewForm"
import Review from "./Review";

const BookReviewPage = ( { books } ) => {
  const [currentBook, setCurrentBook] = useState({})
  const { id } = useParams()


  useEffect(() => {
    const findBook = books.find(book => book.id === +id)
    setCurrentBook(findBook)
  }, [books, id])
  
  console.log(currentBook)
  // const displayReviews = currentBook.reviews.map(review => <Review key={review.id} review={review} />)

  return (
    <div>
      <div>
        <h1>{currentBook.title}</h1>
      </div>
      <div>
        <img src={currentBook.image_url} alt={currentBook.title} />
      </div>
      <div>
        <h2>Reviews</h2>
        {/* <div>{displayReviews}</div> */}
        {/* showform / hideform */}
      </div>
      <button>Leave a Review</button>
      <ReviewForm currentBook={currentBook} />
    </div>
  );
}

export default BookReviewPage