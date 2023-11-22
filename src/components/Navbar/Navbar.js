
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Your CSS file
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth(); // Destructure logout from useAuth
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Call the logout function from AuthContext
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light Navvbar bg-white">
      <div className="container navv bg-white">
        <Link className="navbar-brand bg-white" to={isAuthenticated ? "/dashboard" : "/"}>
          <span style={{ color: '#FF5F5F', backgroundColor: 'white' }}>EventZ</span>
          <span style={{ backgroundColor: 'white' }}> Planner</span>
        </Link>
        <div className="collapse navbar-collapse bg-white" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item bg-white">
              <Link className="nav-link" to={isAuthenticated ? "/dashboard" : "/"}>Home</Link> 
            </li>
            {/* <li className="nav-item bg-white">
              <Link className="nav-link" to={isAuthenticated ? "/dashboard#about" : "/"}>About Us</Link>
            </li> */}
            <li className="nav-item bg-white">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            {isAuthenticated && (
              <>
                <li className="nav-item bg-white">
                  <Link className="nav-link" to="/events">Events</Link>
                </li>
                <li className="nav-item bg-white">
                  <button className="nav-link" onClick={handleLogout} style={{ background: 'none', border: 'none' }}>Logout</button>
                </li>
              </>
            )}
            
            {!isAuthenticated && (
              <li className="nav-item bg-white">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            )}
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
