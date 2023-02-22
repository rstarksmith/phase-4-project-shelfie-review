import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import ReviewForm from "./ReviewForm"

const BookReviewPage = ( { books } ) => {
  const [currentBook, setCurrentBook] = useState({})
  const { id } = useParams()
  
  // console.log(books)
  // console.log(id, typeof id)
  // const findBook = books.find(book => book.id === +id)
  // console.log(findBook)


  useEffect(() => {
    const findBook = books.find(book => book.id === +id)
    setCurrentBook(findBook)
  }, [])


  console.log(currentBook)


  return (
    <div>
      <div>
        <h1>{currentBook.title}</h1>
      </div>
      <div>
        <img
         src={currentBook.image_url} 
         alt={currentBook.title} 
         />
      </div>
      <div>
        <h2>Reviews</h2>
        {/* <p>{currentBook.reviews.map}</p> */}
        {/* showform / hideform */}
      </div>
      <button>Leave a Review</button>
      <ReviewForm currentBook={currentBook} />
    </div>
  );
}

export default BookReviewPage