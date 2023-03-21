import { useState } from "react"

const BookForm = ({ handleAddBook, noBookForm }) => {
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
          resp.json().then((newBook) => 
            handleAddBook(newBook),
            noBookForm()
            )
        }else {
          resp.json().then(resp => {
            setErrors(resp.errors)
          })
        }
    })
  }
  

  return (
    <div>
      <img
        src="https://i.imgur.com/269cNk6.png"
        alt="open book"
        className="bookform"
      />
      <div className="form-block">
        <h1 className="sub-head">Add to Bookshelf</h1>
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
          <br />
          <input
            className="input"
            autoComplete="off"
            name="image_url"
            type="text"
            onChange={handleChange}
            value={newBook.image_url}
            placeholder="Image URL..."
          />
          <br />
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
          <br />
          <button className="bttn" type="submit">
            Add Book
          </button>
          <button onClick={noBookForm} className="bttn-flip" type="button">
            Cancel
          </button>
        </form>
        {errors
          ? Object.entries(errors).map(([key, value]) => (
              <p className="err">
                ▸ {key} {value}
              </p>
            ))
          : null}
      </div>
    </div>
  );
}

export default BookForm