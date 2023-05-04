import { useState } from "react"
import { useNavigate } from "react-router-dom";

const SignIn = ({ logInUser }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState(false)
  const navigate = useNavigate()

  const handleSignIn = (e) => {
    e.preventDefault()
    fetch('/signin', {
      method: 'POST',
      headers: {'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password
    })
    }).then(resp => {
      if(resp.ok) {
        resp.json().then(userObj => logInUser(userObj))
      } else {
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
        <h3>Sign in to My Shelfie</h3>
        <form onSubmit={handleSignIn}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Username..."
            className="input"
            autoComplete="off"
          />
          <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password..."
            className="input"
            autoComplete="off"
          />
          <br />
          <button className="bttn" type="submit">
            Sign in
          </button>
        </form>
        {errors
          ? Object.entries(errors).map(([key, value]) => (
              <p className="err" key={`${key} ${value}`}>
                ⚠︎ {value}
              </p>
            ))
          : null}
        <p>
          Don't have an account?{" "}
          <span onClick={() => navigate("/signup")} className="line-link">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
