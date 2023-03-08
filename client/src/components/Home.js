import { useNavigate } from "react-router-dom";

const Home = ({ user }) => {
  const navigate = useNavigate()

  

  return (
    <div>
      <div>
        {user ? (<h1 className="header">Welcome back!</h1>) : (<h1 className="header">Join the Shelfie Community!</h1>)}
        <br />
        <h4 className="sub-head">Share your TBR shelf and leave reviews for your fellow readers</h4>
      </div>
      {user ? ( 
      <button className="bttn" onClick={() => navigate("/myshelfie")}>My Shelfie</button>
      ) : (
      <button className="bttn" onClick={() => navigate("/signup")}>Sign up</button>
      )}
      <br/>
      <img
        src="https://i.imgur.com/nP4luOk.png"
        alt="infographic on features"
        className="infographic"
      />
      <div>
        <h2 className="header">Features</h2>
      </div>
      <div>
        <img
          src="https://i.imgur.com/ZMtwsZ4.png"
          alt="camera #shelfieshare"
          className="logo"
        />
        <p>Share a photo of your TBR</p>
        <p>shelf  →#shelfieshare</p>
        <img
          src="https://i.imgur.com/269cNk6.png"
          alt="open book"
          className="logo"
        />
        <p>Search books others are reading</p>
        <div>
          <img
            src="https://i.imgur.com/oXpjdgH.png"
            alt="reviews writing prompt"
            className="logo"
          />
          <p>Leave reviews</p>
          <img
            src="https://i.imgur.com/QLwgrUj.png"
            alt="reader with heart my shelfie"
            className="logo"
          />
          <p>Join our reading community</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
