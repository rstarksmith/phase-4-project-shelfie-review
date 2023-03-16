import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"

const MyShelfie = ({ user, closeAccount, updateUserPhoto }) => {
  const [profile, setProfile] = useState([])
  const [photoUpdate, setPhotoUpdate] = useState({
    photo_url: "",
  })
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

  if (!user) return <h1>Loading...</h1>;

   const myBooks = profile.map((book) => (
     <img
       key={book.id}
       onClick={() => navigate(`/books/${book.id}`)}
       src={book.image_url}
       className="card-img"
       alt={book.title}
     />
   ));

   const editShelfie = (e) => {
    e.preventDefault()
    setErrors(null)
    fetch(`/users/${user.id}}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(photoUpdate)
    })
    .then(resp => {
        if(resp.ok) {
          resp.json().then(userObj => {
            updateUserPhoto(userObj)
            
          })
        }else {
          resp.json().then(resp => {
            setErrors(resp.errors)
          })
        }
    })
    }

    const handleChange = (e) => {
      const { name, value } = e.target;
      setPhotoUpdate((prevState) => ({...prevState, [name]: value }))
    };
  
    console.log(photoUpdate)

   const deleteUser = () => {
    fetch('/closeaccount', {
      method: 'DELETE'
    })
    closeAccount(null)
    navigate('/')
   }
  
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
          <form className="shelfie-border" onSubmit={editShelfie}>
            <label>Is it time to update your shelfie?</label>
            <input
              className="input"
              name="photo_url"
              onChange={handleChange}
              value={photoUpdate.photo_url}
              placeholder="New Shelfie Photo URL..."
            />
            {errors
              ? Object.entries(errors).map(([key, value]) => (
                  <p className="err">
                    ▸ {key} {value}
                  </p>
                ))
              : null}
            <button className="bttn" type="submit">
              Update my Shelfie
            </button>
          </form>
          <br />
          <button onClick={deleteUser} className="bttn">
            delete account
          </button>
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
