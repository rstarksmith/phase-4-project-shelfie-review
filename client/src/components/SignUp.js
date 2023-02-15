import { useState } from "react"
import { Link } from "react-router-dom"

const SignUp = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [photoUrl, setPhotoUrl] = useState("")
  // errors
  // loading?


  
  return (
    <div>
      <img
        src="https://i.imgur.com/pxg3tZ9.png"
        alt="shelfie share logo"
        className="logo"
      />
      <div>
        <h3> Create an account </h3>
        <form>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Create Username..."
          />
          <br />
          <input
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create Password..."
          />
          <br />
          <input
            type="text"
            name="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            placeholder="Confirm Password..."
          />
          <br />
          <input
            type="text"
            name="photo_url"
            value={photoUrl}
            onChange={(e) => setPhotoUrl(e.target.value)}
            placeholder="Photo URL of your current TBR shelf..."
          />
          <br />
          <button>Sign up</button>
        </form>

        <p>Already have an account?</p>
        <Link to="/signin">
          <p>Sign in</p>
        </Link>
      </div>
    </div>
  );
}

export default SignUp