import { useNavigate } from "react-router-dom";

const Home = ({ user }) => {
  const navigate = useNavigate()

  

  return (
    <div>
      <div>
        {user ? (
          <h1 className="header">Welcome back!</h1>
        ) : (
          <h1 className="header">Join the Shelfie Community!</h1>
        )}
        <h4 className="sub-head">
          Share your TBR shelf and leave reviews for your fellow readers
        </h4>
      </div>
      <div className="center-bttn">
        {user ? (
          <button className="bttn" onClick={() => navigate("/myshelfie")}>
            My Shelfie
          </button>
        ) : (
          <button className="bttn" onClick={() => navigate("/signup")}>
            Sign up
          </button>
        )}
      </div>
      <br />
      <img
        src="https://i.imgur.com/nP4luOk.png"
        alt="infographic on features"
        className="infographic"
      />
      <div>
        <h2 className="header">Features</h2>
      </div>
      <div className="feature-grid">
        <div>
          <div>
            <img
              src="https://i.imgur.com/ZMtwsZ4.png"
              alt="camera #shelfieshare"
              className="logo"
            />
          </div>
          <div>
            <p>Share a photo of your</p>
            <p onClick={() => navigate("/shelfieshare")}>
              bookshelf ▷#shelfieshare
            </p>
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://i.imgur.com/269cNk6.png"
              alt="open book"
              className="logo"
            />
          </div>
          <div>
            <p>Find a new book from</p>
            <p>our Bookshelf</p>
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://i.imgur.com/oXpjdgH.png"
              alt="reviews writing prompt"
              className="logo"
            />
          </div>
          <div>
            <p>Review your recent reads</p>
            <p>for fellow readers </p>
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://i.imgur.com/QLwgrUj.png"
              alt="reader with heart my shelfie"
              className="logo"
            />
          </div>
          <div>
            <p>Join our community &</p>
            <p>open a shelfie account</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
