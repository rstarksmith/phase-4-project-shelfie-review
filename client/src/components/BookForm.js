import { useState } from "react"

const BookForm = ({ handleAddBook }) => {
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    genre: "",
    image_url: ""
  })
  const [errors, setErrors] = useState(false)
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const addBook = (e) => {
    e.preventDefault()
    fetch("/books", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook)
      })
      .then(resp => {
        if(resp.ok) {
          resp.json().then(newBook => handleAddBook(newBook))
        }else {
          resp.json().then(resp => {
            setErrors(resp.errors)
          })
        }
    })
  }
  

  return (
    <div>
      <h1>Add to Bookshelf</h1>
      <form onSubmit={addBook}>
        <input
          className="input"
          name="title"
          type="text"
          onChange={handleChange}
          value={newBook.title}
          placeholder="Title..."
        />
        <br />
        <input
          className="input"
          name="author"
          type="text"
          onChange={handleChange}
          value={newBook.author}
          placeholder="Author..."
        />
        <br/>
        <input
          className="input"
          name="image_url"
          type="text"
          onChange={handleChange}
          value={newBook.image_url}
          placeholder="Image URL..."
        />
        <br/>
        <select
          className="input"
          name="genre"
          onChange={handleChange}
          value={newBook.genre}
        >
          <option value="">--Choose Genre--</option>
          <option value="Romance">Romance</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Historical Fiction">Historical Ficion</option>
          <option value="Horror">Horror</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Mystery">Mystery</option>
          <option value="Misc Fiction">Misc Fiction</option>
          <option value="Nonfiction">Nonfiction</option>
        </select>
        <br/>
        <button type="submit">Add Book</button>
      </form>
      {errors ? (Object.entries(errors).map(([key, value]) => <p>{key} {value}</p>)) : null}
    </div>
  );
}

export default BookForm