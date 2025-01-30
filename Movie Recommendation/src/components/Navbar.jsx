import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.jpg'; 
const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    localStorage.removeItem('authToken'); 
    alert('Logged out successfully!');
    navigate('/login'); 
  };
  

  return (
    <nav
      style={{
        padding: '10px',
        backgroundColor: '#282c34',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={Logo} 
          alt="MovieApp Logo"
          style={{
            width: '50px',
            height: '50px',
            marginRight: '12px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '2px solid white',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'box-shadow 0.4s ease, transform 0.4s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.5)';
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        />
        <h1 style={{ margin: '0', fontSize: '1.5rem' }}>MovieFinder</h1>
      </div>
      <div>
        <Link
          to="/"
          style={{
            margin: '10px',
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.1rem',
          }}
        >
          Home
        </Link>
        <Link
          to="/profile"
          style={{
            margin: '10px',
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.1rem',
          }}
        >
          Profile
        </Link>
        <Link
          to="/login"
          style={{
            margin: '10px',
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.1rem',
          }}
        >
          Login
        </Link>
        <Link
          to="/sign-up"
          style={{
            margin: '10px',
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.1rem',
            
          }}
        >
          Sign Up
        </Link>
        <button
          onClick={handleLogout}
          style={{
            margin: '10px',
            background: "linear-gradient(135deg, #e50914, #ff9900)",
            color: 'white',
            border: 'none',
            width: '100px',
            padding: '8px 16px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '1.1rem',
         
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
