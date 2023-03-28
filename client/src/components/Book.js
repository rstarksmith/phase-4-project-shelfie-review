import { useNavigate } from "react-router-dom";
import { useState } from "react"

const Book = ({ book }) => {
  const [likes, setLikes] = useState(book.likes)
  const navigate = useNavigate()

  const likedIt = (e) => {
    e.preventDefault()
    console.log(likes)
    fetch(`/books/${book.id}`, {
      method: 'PATCH',
      headers: { 
        "Content-Type": "application/json",
      },
      body: JSON.stringify({likes: likes})
    })
    .then(resp => resp.json())
    .then(book => {
      console.log(book)
      setLikes(book)
    })
  }

  return (
    <div>
      <img
        className="card-img"
        onClick={() => navigate(`/books/${book.id}`)}
        src={book.image_url}
        alt={book.title}
      />
      <button onClick={likedIt}>♥︎ {likes}</button> 
    </div>
  );
};

export default Book;


