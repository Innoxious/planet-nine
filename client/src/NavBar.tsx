import * as React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-gradient mb-5">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand">
        Mission Properly
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/missions" className="nav-link">
              Missions
            </Link>
          </li>
          {/* <li className="nav-item">
            <a href="/api/auth/logout" className="nav-link">
              Logout
            </a>
          </li> */}
          <li className="nav-item">
            <Link to="/protected" className="nav-link">
              Protected
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavBar;
