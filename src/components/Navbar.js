import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

const Navbar = () => (
  <div className="nav-container">
    <nav style={{
      margin: '1rem 4rem',
      display: 'flex',
      justifyContent: 'space-between',
    }}
    >
      <div className="logo-conatiner">
        <h1>Bookstore CMS</h1>
        <ul style={{ display: 'flex', alignItems: 'center' }}>
          <li
            className="li-navbar"
            key={1}
          >
            <NavLink
              style={({ isActive }) => ({
                display: 'block',
                textDecoration: 'none',
                color: isActive ? '#121212' : 'grey',
              })}
              to="/"
            >
              BOOKS
            </NavLink>
          </li>
          <li
            className="li-navbar2"
            key={2}
          >
            <NavLink
              style={({ isActive }) => ({
                display: 'block',
                textDecoration: 'none',
                color: isActive ? '#121212' : 'grey',
              })}
              to="/categories"
            >
              CATEGORIES
            </NavLink>
          </li>
        </ul>
      </div>
      <button type="button" className="user" label="user"><ImUser /></button>
    </nav>
    <Outlet />
  </div>
);

export default Navbar;
