
const Shelfie = ( { userPhoto }) => {

  return (
    <div>
      <div>
        <img
          src={userPhoto.photo_url}
          alt="shelfie user TBR shelf"
          className="shelf-img"
        />
      </div>
      <div>
        <h4>@{userPhoto.username}</h4>
      </div>
    </div>
  );
}

export default Shelfie