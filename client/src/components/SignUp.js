import { Link } from "react-router-dom"

const SignUp = () => {
  return (
    <div>
      <div>
        <h3> Sign in to My Shelfie</h3>
        <form>
          <input
            type="text"
            name="username"
            // value={username}
            // onChange={handleChange}
            placeholder="Create Username..."
          />
          <br />
          <input
            type="text"
            name="password"
            // value={password}
            // onChange={handleChange}
            placeholder="Create Password..."
          />
          <br />
          <input
            type="text"
            name="password"
            // value={password}
            // onChange={handleChange}
            placeholder="Confirm Password..."
          />
          <br />
          <input
            type="text"
            name="password"
            // value={password}
            // onChange={handleChange}
            placeholder="Photo URL of your current TBR shelf..."
          />
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