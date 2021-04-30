import React from 'react';
import { useDispatch } from 'react-redux';
import { navigateTo } from '../app/appSlice';

const Navbar = ({ activeTab }) => {
  const dispatch = useDispatch();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand">Navbar</span>
          <ul className="navbar-nav">
            <li
              className="nav-item"
              onClick={() => dispatch(navigateTo('home'))}
            >
              <span
                className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
              >
                Home
              </span>
            </li>
            <li
              className="nav-item"
              onClick={() => dispatch(navigateTo('cart'))}
            >
              <span
                className={`nav-link ${activeTab === 'cart' ? 'active' : ''}`}
              >
                Cart
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
