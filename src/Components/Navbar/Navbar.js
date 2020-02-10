import React from 'react';
import routes from './routes';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <a className='navbar-brand' href='#'>
        Navbar
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          {routes.map((route, key) => {
            return route.subRoutes ? (
              <li className='nav-item dropdown' key={route.id}>
                <a
                  href='#'
                  className='nav-link dropdown-toggle'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                  id={route.id}
                >
                  {route.name}
                </a>
                <div className='dropdown-menu' aria-labelledby={route.id}>
                  {route.subRoutes.map((subRoute, subKey) => (
                    <Link
                      className='dropdown-item'
                      key={subKey}
                      to={subRoute.path}
                    >
                      {subRoute.name}
                    </Link>
                  ))}
                </div>
              </li>
            ) : (
              <li className='nav-item active' key={route.id}>
                <Link to={route.path} className='nav-link'>
                  {route.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
