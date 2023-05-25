import { useNavigate } from "react-router-dom";
import { useState } from "react"
import ConfirmDelete from "./ConfirmDelete";

const MyShelfie = ({ user, closeAccount, updateUserPhoto }) => {
  const [photoUpdate, setPhotoUpdate] = useState({
    photo_url: "",
  })
  const [hideConfirm, setHideConfirm] = useState(false)
  const [errors, setErrors] = useState(null)
  const navigate = useNavigate();

  if (!user) return <h1 className="header">Loading...</h1>;
  // if this was fetching from the backend I could set the error
  // on the backend, the error msg is set on client side so when the user is
  // loading there is a you see loading msg, to put Not authorized, user 
  // would see that flashed when their profile is loading. 

   const myBooks = user.books.map((book) => (
     <img
       key={book.id}
       onClick={() => navigate(`/books/${book.id}`)}
       src={book.image_url}
       className="card-img"
       alt={book.title}
     />
   ));

   const handleChange = (e) => {
     const { name, value } = e.target;
     setPhotoUpdate({ [name]: value });
   };

   const editShelfie = (e) => {
    e.preventDefault()
    setErrors(null)
    fetch(`/users/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(photoUpdate)
    })
    .then(resp => {
        if(resp.ok) {
          resp.json().then((pic) => {
            updateUserPhoto(pic)
            setPhotoUpdate({ photo_url: "" })
          })
        }else {
          resp.json().then(resp => {
            setErrors(resp.errors)
          })
        }
    })
    }

   const deleteUser = () => {
    fetch('/closeaccount', {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    .then(resp => {
      if(resp.ok) {
       closeAccount(null)
       navigate('/')
      } else {
        resp.json().then(resp => setErrors(resp.errors))
      } 
    })
  }

  const changePage = () => {
    setHideConfirm(!hideConfirm)
  }
  
  return (
    <>
      {hideConfirm ? (
        <ConfirmDelete deleteUser={deleteUser} closeConfirm={changePage} />
      ) : (
        <div className="shelf-container">
          <div>
            <div className="my-account">
              <h3 className="shelf-head">@{user.username}</h3>
              <img
                src={user.photo_url}
                alt="shelfie user TBR shelf"
                className="my-shelfie"
              />
              <br />
              <form className="shelfie-border" onSubmit={editShelfie}>
                <label className="shelf-txt">
                  Is it time to update your shelfie?
                </label>
                <input
                  autoComplete="off"
                  className="shelf-input"
                  name="photo_url"
                  onChange={handleChange}
                  value={photoUpdate.photo_url}
                  placeholder="New Shelfie Photo URL..."
                />
                <button className="shelf-bttn" type="submit">
                  Update Shelfie
                </button>
                {errors
                  ? Object.entries(errors).map(([key, value]) => (
                      <p className="err" key={value}>
                        ⚠︎ {key} {value}
                      </p>
                    ))
                  : null}
              </form>
            </div>
          </div>
          <div className="my-books">
            <h3 className="sub-head">My Books</h3>
            <div className="book-scroll">
              {myBooks}
              <button onClick={changePage} className="shelf-bttn-flip">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyShelfie;
