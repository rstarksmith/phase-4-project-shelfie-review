import { NavLink, Link, useNavigate } from 'react-router-dom';

const NavBar = ( user ) => {
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
      <div className="nav-links">
        {/* conditional render- features takes to icons on homepage and only shows when not logged in */}
        <NavLink to="/books">Bookshelf</NavLink>
        {/* books shows only when logged in */}
        <NavLink to="/shelfieshare">#shelfieshare</NavLink>
        {/* conditional render if user is signed in display username and logout button */}
        {/* <h4>{user.username}</h4> */}
      </div>
      <div>
        <button onClick={() => navigate("/signup")}>Sign up</button>
        <button onClick={() => navigate("/myshelfie")}>My Shelfie</button>
        <button onClick={() => navigate("/signin")}>Sign in</button>
        <button>Log out</button>
      </div>
    </nav>
  );
}

export default NavBar