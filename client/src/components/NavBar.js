import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <img
          src="https://i.imgur.com/pxg3tZ9.png"
          alt="shelfie share logo"
          className="logo"
        />
        <div className="nav-links">
          <NavLink to="/">Features</NavLink>
          <NavLink to="/books">Book Reviews</NavLink>
          <NavLink to="/shelfieshare">#shelfieshare</NavLink>
          <NavLink to="/myshelfie">My Shelfie</NavLink>
        </div>
        <div>
          <button>Sign in</button>
          <button>Sign up</button>
        </div>
      </nav>
    </div>
  );
}

export default NavBar