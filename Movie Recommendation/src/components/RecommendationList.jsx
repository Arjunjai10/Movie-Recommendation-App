import React from 'react';
import MovieCard from './MovieCard';

const RecommendationList = ({ movies }) => {
  return (
    <div style={styles.container}>
      {movies.length > 0 ? (
        movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
      ) : (
        <p style={styles.noMovies}>No movies match your preferences. Try changing filters.</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
    padding: '20px',
  },
  noMovies: {
    fontSize: '1.2rem',
    color: '#555',
  },
};

export default RecommendationList;
