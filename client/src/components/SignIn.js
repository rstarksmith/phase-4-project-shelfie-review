import { Link } from "react-router-dom"

const SignIn = () => {
  return (
    <div>
      <h3> Sign in to My Shelfie</h3>
      <form>
        <input 
          type="text" 
          name="username" 
          // value={username} 
          // onChange={handleChange} 
          placeholder="Enter Username..."
        />
        <br/>
        <input
          type="text"
          name="password"
          // value={password}
          // onChange={handleChange}
          placeholder="Enter Password..."
        />
        <br/>
        <button>Sign in</button>
      </form>

        <p>Don't have an account?</p><Link to="/signup">
          <p>Sign up</p>
        </Link>
      
    </div>
  );
}

export default SignIn