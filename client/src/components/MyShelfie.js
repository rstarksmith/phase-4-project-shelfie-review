
const MyShelfie = () => {
  
  return (
    <div>
      <h1>Username</h1>
      {/* {currentUser.username} */}
      <div>
        <h3>My Shelfie</h3>
        {/* <img
          src={currentUser.photo_url}
          alt="shelfie user TBR shelf"
          className="logo"
        /> */}
      </div>
      <div>
        <h3>My Reviews</h3>
        {/* map through users reveiws, reviews.map..user_id === currentUser.id */}
      </div>
      <div>
        <h3>My Books</h3>
        {/* has many books through reviews, show through relationship by
        mapping throught book photos */}
      </div>
    </div>
  );
}

export default MyShelfie