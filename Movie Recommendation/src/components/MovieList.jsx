import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import api from "../utils/api";

const MovieList = ({ searchQuery }) => {
  const [movies, setMovies] = useState([]); 
  const [openCard, setOpenCard] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await api.get("/movies"); 
        setMovies(res.data); 
        setLoading(false);
      } catch (err) {
        console.error("Error fetching movies:", err);
        setError("Failed to fetch movies");
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleCardClick = (id) => {
    setOpenCard((prev) => (prev === id ? null : id)); 
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={styles.movieList}>
      {loading ? (
        <p style={styles.loading}>Loading movies...</p>
      ) : error ? (
        <p style={styles.error}>{error}</p>
      ) : filteredMovies.length === 0 ? (
        <p style={styles.noMoviesFound}>Movie not found</p>
      ) : (
        filteredMovies.map((movie) => (
          <MovieCard
            key={movie._id} 
            movie={movie}
            isOpen={openCard === movie._id}
            onCardClick={() => handleCardClick(movie._id)}
          />
        ))
      )}
    </div>
  );
};

const styles = {
  movieList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  noMoviesFound: {
    fontSize: "1.2rem",
    color: "#555",
    textAlign: "center",
    marginTop: "20px",
  },
  loading: {
    fontSize: "1.2rem",
    color: "#007bff",
    textAlign: "center",
    marginTop: "20px",
  },
  error: {
    fontSize: "1.2rem",
    color: "red",
    textAlign: "center",
    marginTop: "20px",
  },
};

export default MovieList;
