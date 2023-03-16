import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"

const MyShelfie = ({ user }) => {
  const [profile, setProfile] = useState([])
  const [errors, setErrors] = useState(null)
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`/profile`).then((resp) => {
        if (resp.ok) {
          resp.json().then((myData) => setProfile(myData));
        } else {
          resp.json().then((resp) => setErrors(resp.errors));
        }
      });
    }
  }, [user]);

  console.log(profile)

  if (!user) return <h1>Loading...</h1>;

   const myBooks = profile.map((book) => (
     <img
       key={book.id}
      //  onClick={() => navigate(`/books/${book.id}`)}
       src={book.image_url}
       className="card-img"
       alt={book.title}
     />
   ));


   
  //  fetch('reviews/${id}')

   

  //  const deleteUser = () => {
  //    (alert ("Warning your user account and book reviews will be deleted. Press ok to continue...")) 
  //  }

  return (
    <div className="shelf-container">
      <div className="my-account">
        <div>
          <h3 className="sub-head">@{user.username}</h3>
          <img
            src={user.photo_url}
            alt="shelfie user TBR shelf"
            className="my-shelfie"
          />
          <br />
          <form>
            <label>Is it time to update your shelfie?</label>
            <input className="input" placeholder="Photo URL..." />
            <button className="bttn" type="submit">
              Update my Shelfie
            </button>
          </form>
          <br/>
          <button className="bttn">delete account</button>
        </div>
      </div>
      <div className="my-books">
        <h3 className="sub-head">My Books</h3>
        <div className="book-scroll">{myBooks}</div>
      </div>
    </div>
  );
};

export default MyShelfie;
