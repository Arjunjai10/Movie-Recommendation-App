import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/movies/${movie.id}`, { state: { movie } });
  };

  const styles = {
    cardContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: '20px',
      padding: '20px',
    },
    card: {
      width: '200px',
      border: 'none',

      borderRadius: '10px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      overflow: 'hidden',
      backgroundColor: '#fff',
      cursor: 'pointer',
      transition: 'transform 0.3s, box-shadow 0.3s',
      position: 'relative',
    },
    cardHover: {
      transform: 'translateY(-10px)',
      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2)',
    },
    poster: {
      width: '100%',
      height: '280px',
      objectFit: 'cover',
      transition: 'transform 0.3s',
    },
    info: {
      padding: '15px',
    },
    title: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      color: '#333',
      margin: '10px 0',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
    genre: {
      fontSize: '1rem',
      color: '#777',
      marginBottom: '5px',
    },
    actors: {
      fontSize: '0.9rem',
      color: '#999',
      marginBottom: '5px',
    },
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      style={isHovered ? { ...styles.card, ...styles.cardHover } : styles.card}
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={movie.poster}
        alt={movie.title}
        style={styles.poster}
        onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
        onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
      />
      <div style={styles.info}>
        <h3 style={styles.title}>{movie.title}</h3>
        <p style={styles.genre}>Genre: {movie.genre}</p>
        <p style={styles.actors}>Actors: {movie.actors.join(', ')}</p>
      </div>
    </div>
  );
};


export default MovieCard;
