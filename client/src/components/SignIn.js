import { useState } from "react"
import { Link } from "react-router-dom"

const SignIn = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  // errors
  //optional loading


  return (
    <div>
      <img
        src="https://i.imgur.com/pxg3tZ9.png"
        alt="shelfie share logo"
        className="logo"
      />
      <div>
        <h3> Sign in to My Shelfie</h3>
        <form>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Username..."
          />
          <br />
          <input
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password..."
          />
          <br />
          <button>Sign in</button>
          {/* could add optional loading... */}
        </form>

        <p>Don't have an account?</p>
        <Link to="/signup">
          <p>Sign up</p>
        </Link>
      </div>
    </div>
  );
}

export default SignIn