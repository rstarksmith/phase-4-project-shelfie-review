import { NavLink, Link, useNavigate } from 'react-router-dom';

const NavBar = ({ user, logOut }) => {
  const navigate = useNavigate()


  return (
    <nav className="navbar">
      <Link to="/">
        <img
          src="https://i.imgur.com/pxg3tZ9.png"
          alt="shelfie share logo"
          className="logo"
        />
      </Link>
      {/* refactor */}
      <div className="nav-links">
        {user ? (<NavLink to="/books">Bookshelf</NavLink>) : null}
        <NavLink to="/shelfieshare">#shelfieshare</NavLink> 
      </div>
      <div>
        {user ? (
          <button onClick={() => navigate("/myshelfie")}>My Shelfie</button>
        ) : (
          <button onClick={() => navigate("/signup")} className='bttn'>Sign up</button>
        )}
        {user ? (
          <button onClick={() => {logOut()}}>Log out</button>
        ) : (
          <button onClick={() => navigate("/signin")}>Sign in</button>
        )}
      </div>
    </nav>
  );
}

export default NavBar