import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()

  return (
    <div>
      <div>
        {/* Conditional render, different text if user logged in */}
        <h1>Join the Shelfie Community!</h1>
        <br />
        <h4>Share your TBR shelf and leave review for your fellow readers</h4>
      </div>
      <button onClick={() => navigate("/signup")}>Sign up</button>
      <br/>
      <img
        src="https://i.imgur.com/ZMtwsZ4.png"
        alt="camera #shelfieshare"
        className="logo"
      />
      <div>
        <h2>Features</h2>
        <img
          src="https://i.imgur.com/ZMtwsZ4.png"
          alt="camera #shelfieshare"
          className="logo"
        />
        <img
          src="https://i.imgur.com/269cNk6.png"
          alt="open book"
          className="logo"
        />
        <div>
          <img
            src="https://i.imgur.com/oXpjdgH.png"
            alt="reviews writing prompt"
            className="logo"
          />
          <img
            src="https://i.imgur.com/QLwgrUj.png"
            alt="reader with heart my shelfie"
            className="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
