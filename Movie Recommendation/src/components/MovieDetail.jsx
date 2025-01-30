import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const MovieDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { movie } = location.state || {}; 

  if (!movie) {
    return <p>Movie not found.</p>;
  }

  const handleBackClick = () => {
   
    navigate('/home'); 
  };

  const handleMoreInfoClick = () => {
    if (movie.url) {
      window.open(movie.url, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <div style={styles.container}>
      <button onClick={handleBackClick} style={styles.backButton}>
        Back to Movies
      </button>
      <div style={styles.card}>
        <img src={movie.poster} alt={movie.title} style={styles.poster} />
        <div style={styles.details}>
          <h1 style={styles.title}>{movie.title}</h1>
          <p><strong>Genre:</strong> {movie.genre}</p>
          <p><strong>Actors:</strong> {movie.actors.join(', ')}</p>
          <p><strong>Description:</strong> {movie.description}</p>
          <p><strong>Released:</strong> {movie.releaseDate || 'N/A'}</p>
          <p><strong>Director:</strong> {movie.director || 'N/A'}</p>
          {movie.url && (
            <p>
              <button onClick={handleMoreInfoClick} style={styles.moreInfoButton}>
                Watch Here
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    
  },
  backButton: {
    marginBottom: '20px',
    padding: '12px 18px',
    background: "linear-gradient(135deg, #e50914, #ff9900)",
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
  },
  poster: {
    width: '300px',
    height: '400px',
    objectFit: 'cover',
    borderRadius: '10px',
    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
  },
  details: {
    flex: 1,
    padding: '10px',
    color: 'black',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: 'black',
    marginBottom: '15px',
  },
  moreInfoButton: {
    padding: '12px 20px',
    background: "linear-gradient(135deg, #e50914, #ff9900)",
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'transform 0.3s ease, background 0.3s ease',
  },
};

export default MovieDetails;
