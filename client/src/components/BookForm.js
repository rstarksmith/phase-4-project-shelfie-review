// import { UseState } from "react"

const BookForm = () => {


  return (
    <div>
      <h1>Add to Bookshelf</h1>
      <form>
        <input
          className="input"
          name="artist"
          type="text"
          // onChange={handleChange}
          // value={formData.artist}
          placeholder="Title..."
        />
        <br />
        <input
          className="input"
          name="title"
          type="text"
          // onChange={handleChange}
          // value={formData.title}
          placeholder="Author..."
        />
        <br/>
        <input
          className="input"
          name="title"
          type="text"
          // onChange={handleChange}
          // value={formData.title}
          placeholder="Image URL..."
        />
        <br/>
        <select
          className="input"
          name="media_condition"
          // onChange={handleChange}
          // value={formData.media_condition}
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