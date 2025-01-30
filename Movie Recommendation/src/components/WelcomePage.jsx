import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/login'); 
  };

 
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to MovieFinder!</h1>
      <p style={styles.subtitle}>Discover and explore movies based on your preferences.</p>
      <div style={styles.buttonContainer}>
        <button onClick={handleStartClick} style={styles.startButton}>
          Start Exploring Movies
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',  
    background: 'linear-gradient(135deg, #1c1c1c, #2b2b2b, #e50914)',
    backgroundSize: '300% 300%', 
    animation: 'gradientShift 12s ease infinite', 
    color: 'white',
    textAlign: 'center',
    padding: '0 20px',  
    fontFamily: 'Roboto, sans-serif',
    overflow: 'hidden', 
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: '#e50914', 
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: '30px',
    color: '#bbb', 
  },
  buttonContainer: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center', 
  },
  startButton: {
    padding: '15px 50px',
    background: "linear-gradient(135deg, #e50914, #ff9900)",
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    '&:hover': {
      transform: 'scale(1.1)',
      backgroundColor: '#ff9900',
    },
  },
  profileButton: {
    padding: '15px 30px',
    background: "linear-gradient(135deg, #e50914, #ff9900)",
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    '&:hover': {
      transform: 'scale(1.1)',
      backgroundColor: '#e50914',
    },
  },
};

export default WelcomePage;
