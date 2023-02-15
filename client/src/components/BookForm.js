import { useState } from "react"

const BookForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    image_url: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h1>Add to Bookshelf</h1>
      <form>
        <input
          className="input"
          name="title"
          type="text"
          onChange={handleChange}
          value={formData.title}
          placeholder="Title..."
        />
        <br />
        <input
          className="input"
          name="author"
          type="text"
          onChange={handleChange}
          value={formData.author}
          placeholder="Author..."
        />
        <br/>
        <input
          className="input"
          name="image_url"
          type="text"
          onChange={handleChange}
          value={formData.image_url}
          placeholder="Image URL..."
        />
        <br/>
        <select
          className="input"
          name="genre"
          onChange={handleChange}
          value={formData.genre}
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
        <button>Add Book</button>
      </form>
    </div>
  );
}

export default BookForm