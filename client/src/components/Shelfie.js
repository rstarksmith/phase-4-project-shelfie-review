
const Shelfie = ( { userPhoto }) => {

  return (
    <div>
      <img
        src={userPhoto.photo_url}
        alt="shelfie user TBR shelf"
        className="logo"
      />
      <h4>📖 {userPhoto.username}</h4>
    </div>
  );
}

export default Shelfie