
const MyShelfie = ({ user }) => {

  if (!user) return <h1>user not found</h1>
  
  return (
    <div>
      <h1>@{user.username}</h1>
      <div>
        <h3>My Shelfie</h3>
        <img
          src={user.photo_url}
          alt="shelfie user TBR shelf"
          className="logo"
        />
      </div>
      <div>
        <h3>My Reviews</h3>
        {user.reviews.map((review) => (<p>{review.header}</p>))}
        
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