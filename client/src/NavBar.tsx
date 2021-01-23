import * as React from 'react';
import { Link } from 'react-router-dom';
import { verifyIsAuthenticatedAsync } from './apis/authClient';

class NavBar extends React.Component {
  state = { isAuthenticated: false };

  componentDidMount = async (): Promise<void> => {
    const isAuthenticated = await verifyIsAuthenticatedAsync();
    this.setState({ isAuthenticated });
  };

  render = (): React.ReactNode => {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-gradient mb-5">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Planet Nine++
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
              {this.state.isAuthenticated ? (
                <li className="nav-item">
                  <a href="/api/auth/logout" className="nav-link">
                    Logout
                  </a>
                </li>
              ) : (
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              )}
              <li className="nav-item">
                <Link to="/missions" className="nav-link">
                  Missions
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/teams" className="nav-link">
                  Teams
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
}

export default NavBar;
