import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Navbar = () => (
  <div>
    <nav style={{
      padding: '1rem',
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
                color: isActive ? 'blue' : 'black',
              })}
              to="/"
              exact
            >
              Books
            </NavLink>
          </li>
          <li
            className="li-navbar"
            key={2}
          >
            <NavLink
              style={({ isActive }) => ({
                display: 'block',
                textDecoration: 'none',
                color: isActive ? 'blue' : 'black',
              })}
              to="/categories"
              exact
            >
              Categories
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="user">log icon</div>
    </nav>
    <Outlet />
  </div>
);

export default Navbar;
