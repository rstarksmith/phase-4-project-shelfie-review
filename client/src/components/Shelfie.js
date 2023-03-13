
const Shelfie = ( { userPhoto }) => {

  return (
    <div className="card">
        <img
          src={userPhoto.photo_url}
          alt="shelfie TBR shelf"
          className="shelf-img"
        />
      <div className="container">
        <h2 className="user">@{userPhoto.username}</h2>
      </div>
    </div>
  );
}

export default Shelfie

