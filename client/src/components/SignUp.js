import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SignUp = ({ logInUser }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [photoUrl, setPhotoUrl] = useState("")
  const [errors, setErrors] = useState(false)

  const navigate = useNavigate()

  const handleSignUp = (e) => {
    e.preventDefault()
    setErrors(false)
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        photo_url: photoUrl,
      }),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then(resp => logInUser(resp))
      }else{
        resp.json().then(resp => setErrors(resp.errors))
      }
    })
  }

  
  return (
    <div>
      <img
        src="https://i.imgur.com/pxg3tZ9.png"
        alt="shelfie share logo"
        className="form-logo"
      />
      <div className="form-block">
        <h3>Sign up for a free shelfie account</h3>
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Create Username..."
            className="input"
          />
          <br />
          <input
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create Password..."
            className="input"
          />
          <br />
          <input
            type="text"
            name="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            placeholder="Confirm Password..."
            className="input"
          />
          <br />
          <input
            type="text"
            name="photo_url"
            value={photoUrl}
            onChange={(e) => setPhotoUrl(e.target.value)}
            placeholder="Photo URL of your current TBR shelf..."
            className="input"
          />
          <br />
          <button className="bttn" type="submit">
            Sign up
          </button>
        </form>
        {errors
          ? Object.entries(errors).map(([key, value]) => (
              <p className="err">
                ▸ {key} {value}
              </p>
            ))
          : null}

        <p>
          Already have an account? <span onClick={()=> navigate('/signin')}className="line-link">Sign in</span>
        </p>
      </div>
    </div>
  );
}

export default SignUp