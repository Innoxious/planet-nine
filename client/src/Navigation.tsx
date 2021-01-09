import * as React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => (
  <Navbar bg="dark" expand="lg">
    <div className="container">
      <div className="row">
        <Navbar.Brand>
          <Link to="/">Mission Properly</Link>
        </Navbar.Brand>
        <Nav.Link>
          <Link to="/login">Login</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/missions">Missions</Link>
        </Nav.Link>
      </div>
    </div>
  </Navbar>
);

export default Navigation;
