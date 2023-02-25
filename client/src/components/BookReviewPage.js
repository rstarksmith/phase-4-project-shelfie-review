import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import ReviewForm from "./ReviewForm"
import ReviewList from "./ReviewList";

const BookReviewPage = ( { books } ) => {
  const [currentBook, setCurrentBook] = useState({})
  const [currentReviews, setCurrentReviews] = useState([])
  const [showForm, setShowForm] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const findBook = books.find(book => book.id === +id)
    setCurrentBook(findBook)
    setCurrentReviews(findBook.reviews)
  }, [books, id])

  console.log(currentReviews)

  const hideForm = () => setShowForm(false)

  const showReviewForm = () => setShowForm(true)

  return (
    <div>
      <div>
        <h1>{currentBook.title}</h1>
      </div>
      <div>
        <img src={currentBook.image_url} alt={currentBook.title} />
      </div>
      <div>
        <ReviewList currentReviews={currentReviews} />
      </div>
      {showForm ? (
        <ReviewForm currentBook={currentBook} />
      ) : (
        <button onClick={showReviewForm}>Leave a Review</button>
      )}
    </div>
  );
}

export default BookReviewPage