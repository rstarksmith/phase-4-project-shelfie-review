import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <img
        src="https://i.imgur.com/pxg3tZ9.png"
        alt="shelfie share logo"
        className="logo"
      />
      <div className="nav-links">
        <NavLink to="/">Features</NavLink>
        {/* conditional render - features takes to icons on homepage and only shows when not logged in */}
        <NavLink to="/books">Book Reviews</NavLink>
        {/* books shows only when logged in */}
        <NavLink to="/shelfieshare">#shelfieshare</NavLink>
      </div>
      <div>
        {/* conditional render if user is signed in display username and logout button */}
        <button>My Shelfie</button>
        <button>Sign out</button>
        <button>Sign in</button>
        <button>Sign up</button>
      </div>
    </nav>
  );
}

export default NavBar