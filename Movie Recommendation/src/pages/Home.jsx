import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import RecommendationList from '../components/RecommendationList';
import Inception from "../assets/Inception.jpg";
import Interstellar from "../assets/Interstellar.jpg";
import TheDarkKnight from "../assets/TheDarkKnight.jpg";
import AvengersEndgame from "../assets/Avengers Endgame.jpg";
import Matrix from "../assets/The Matrix.jpg";
import TheShawsankRedemption from "../assets/The Shawshank Redemption.jpg";
import TheGodfather from "../assets/The Godfathe.jpg";
import Titanic from "../assets/Titanic.jpg";
import ForrestGump from "../assets/Forrest Gump.jpg";
import Gladiator from "../assets/Gladiator.jpg";
import LionKing from "../assets/The Lion King.jpg";
import SpiderManNoWayHome from "../assets/Spider Man No Way Home.jpg";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [preferences, setPreferences] = useState({ genre: '', actor: '', movieLength: '', rating: '', decade: '', mood: '' });

  const movies = [
    { id: 1, title: 'Inception', description: 'A mind-bending thriller', poster: Inception, genre: 'Sci-Fi', actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt'], releaseDate: '2010-07-16', director: 'Christopher Nolan', rating: 'PG-13', length: '148 min', url: 'https://www.warnerbros.com/movies/inception' },
    { id: 2, title: 'Interstellar', description: 'A journey through space and time', poster: Interstellar, genre: 'Adventure', actors: ['Matthew McConaughey', 'Anne Hathaway'], releaseDate: '2014-11-07', director: 'Christopher Nolan', rating: 'PG-13', length: '169 min', url: 'https://www.paramount.com/movies/interstellar' },
    { id: 3, title: 'The Dark Knight', description: 'A gripping tale of Batman vs. the Joker', poster: TheDarkKnight, genre: 'Action', actors: ['Christian Bale', 'Heath Ledger'], releaseDate: '2008-07-18', director: 'Christopher Nolan', rating: 'PG-13', length: '152 min', url: 'https://www.warnerbros.com/movies/dark-knight' },
    { id: 4, title: 'The Matrix', description: 'A computer hacker learns the world is a simulation', poster: Matrix, genre: 'Sci-Fi', actors: ['Keanu Reeves', 'Laurence Fishburne'], releaseDate: '1999-03-31', director: 'Lana Wachowski, Lilly Wachowski', rating: 'R', length: '136 min', url: 'https://www.warnerbros.com/movies/matrix' },
    { id: 5, title: 'The Shawshank Redemption', description: 'Two imprisoned men bond over a number of years', poster: TheShawsankRedemption, genre: 'Drama', actors: ['Tim Robbins', 'Morgan Freeman'], releaseDate: '1994-09-22', director: 'Frank Darabont', rating: 'R', length: '142 min', url: 'https://www.warnerbros.com/movies/shawshank-redemption' },
    { id: 6, title: 'The Godfather', description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son', poster: TheGodfather, genre: 'Crime', actors: ['Marlon Brando', 'Al Pacino'], releaseDate: '1972-03-24', director: 'Francis Ford Coppola', rating: 'R', length: '175 min', url: 'https://www.paramount.com/movies/godfather' },
    { id: 7, title: 'Titanic', description: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic', poster: Titanic, genre: 'Romance', actors: ['Leonardo DiCaprio', 'Kate Winslet'], releaseDate: '1997-12-19', director: 'James Cameron', rating: 'PG-13', length: '195 min', url: 'https://www.paramount.com/movies/titanic' },
    { id: 8, title: 'Forrest Gump', description: 'The presidencies of Kennedy and Johnson, the events of Vietnam, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an extraordinary life', poster: ForrestGump, genre: 'Drama', actors: ['Tom Hanks', 'Robin Wright'], releaseDate: '1994-07-06', director: 'Robert Zemeckis', rating: 'PG-13', length: '142 min', url: 'https://www.paramount.com/movies/forrest-gump' },
    { id: 9, title: 'Gladiator', description: 'A betrayed Roman general sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery', poster: Gladiator, genre: 'Action', actors: ['Russell Crowe', 'Joaquin Phoenix'], releaseDate: '2000-05-05', director: 'Ridley Scott', rating: 'R', length: '155 min', url: 'https://www.paramount.com/movies/gladiator' },
    { id: 10, title: 'The Lion King', description: 'Lion prince Simba and his father are targeted by his evil uncle, who wants to ascend the throne himself', poster: LionKing, genre: 'Animation', actors: ['Matthew Broderick', 'Jeremy Irons'], releaseDate: '1994-06-24', director: 'Roger Allers, Rob Minkoff', rating: 'G', length: '88 min', url: 'https://www.disney.com/movies/lion-king' },
    { id: 11, title: 'Spider-Man: No Way Home', description: 'Peter Parker faces a new challenge when villains from different universes come together to fight him', poster: SpiderManNoWayHome, genre: 'Action', actors: ['Tom Holland', 'Zendaya'], releaseDate: '2021-12-17', director: 'Jon Watts', rating: 'PG-13', length: '148 min', url: 'https://www.sonypictures.com/movies/spider-man-no-way-home' },
    { id: 12, title: 'Avengers: Endgame', description: 'The Avengers work to reverse the damage caused by Thanos in Avengers: Infinity War', poster: AvengersEndgame, genre: 'Action', actors: ['Robert Downey Jr.', 'Chris Hemsworth'], releaseDate: '2019-04-26', director: 'Anthony Russo, Joe Russo', rating: 'PG-13', length: '181 min', url: 'https://www.marvel.com/movies/avengers-endgame' },
  ];

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (preferences.genre
        ? movie.genre.toLowerCase() === preferences.genre.toLowerCase()
        : true) &&
      (preferences.actor
        ? movie.actors.some((actor) =>
            actor.toLowerCase().includes(preferences.actor.toLowerCase())
          )
        : true) &&
      (preferences.rating
        ? movie.rating.includes(preferences.rating)
        : true) &&
      (preferences.decade
        ? movie.releaseDate.slice(0, 4).startsWith(preferences.decade)
        : true) &&
      (preferences.mood
        ? movie.description.toLowerCase().includes(preferences.mood.toLowerCase())
        : true)
    );
  });

  return (
    <div style={styles.container}>
      <div style={styles.contentContainer}>
        <div style={styles.preferencesContainer}>
          <h2 style={styles.title}>Share Your Movie Preferences</h2>
          <form style={styles.form}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Favorite Genre:</label>
              <select
                value={preferences.genre}
                onChange={(e) =>
                  setPreferences({ ...preferences, genre: e.target.value })
                }
                style={styles.select}
              >
                <option value="">Select Genre</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Adventure">Adventure</option>
                <option value="Action">Action</option>
                <option value="Romance">Romance</option>
                <option value="Drama">Drama</option>
                <option value="Animation">Animation</option>
              </select>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Favorite Actor:</label>
              <select
                value={preferences.actor}
                onChange={(e) =>
                  setPreferences({ ...preferences, actor: e.target.value })
                }
                style={styles.select}
              >
                <option value="">Select Actor</option>
                <option value="Leonardo DiCaprio">Leonardo DiCaprio</option>
                <option value="Anne Hathaway">Anne Hathaway</option>
                <option value="Christian Bale">Christian Bale</option>
                <option value="Heath Ledger">Heath Ledger</option>
                <option value="Keanu Reeves">Keanu Reeves</option>
                <option value="Tom Hanks">Tom Hanks</option>
              </select>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Movie Rating:</label>
              <select
                value={preferences.rating}
                onChange={(e) =>
                  setPreferences({ ...preferences, rating: e.target.value })
                }
                style={styles.select}
              >
                <option value="">Select Rating</option>
                <option value="PG">PG</option>
                <option value="PG-13">PG-13</option>
                <option value="R">R</option>
                <option value="G">G</option>
              </select>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Preferred Decade:</label>
              <select
                value={preferences.decade}
                onChange={(e) =>
                  setPreferences({ ...preferences, decade: e.target.value })
                }
                style={styles.select}
              >
                <option value="">Select Decade</option>
                <option value="199">1990s</option>
                <option value="200">2000s</option>
                <option value="201">2010s</option>
              </select>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Mood:</label>
              <select
                value={preferences.mood}
                onChange={(e) =>
                  setPreferences({ ...preferences, mood: e.target.value })
                }
                style={styles.select}
              >
                <option value="">Select Mood</option>
                <option value="Exciting">Exciting</option>
                <option value="Emotional">Emotional</option>
                <option value="Thought-Provoking">Thought-Provoking</option>
              </select>
            </div>
          </form>
        </div>
        <div style={styles.recommendationContainer}>
          <SearchBar onSearch={setSearchQuery} />
          <RecommendationList movies={filteredMovies} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    background: 'linear-gradient(135deg, #1c1c1c, #2b2b2b, #e50914)',
    color: '#ffffff',
    minHeight: '100vh',
    fontFamily: "'Roboto', sans-serif",
    animation: 'gradientShift 12s ease infinite',
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column', 
    gap: '20px',
    alignItems: 'center', 
  },
  preferencesContainer: {
    padding: '20px',
    backgroundColor: '#2b2b2b',
    textAlign: 'center',
    maxWidth: '500px',
    marginBottom: '30px', 
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    color: '#ffffff',
  },
  recommendationContainer: {
    flex: '1',
    padding: '20px',
    maxWidth: '900px',
  },
  title: {
    fontSize: '1.8rem',
    marginBottom: '20px',
    fontWeight: 'bold',
    color: '#e50914',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  formGroup: {
    textAlign: 'left',
  },
  label: {
    fontSize: '1rem',
    marginBottom: '8px',
    color: '#ffffff',
    fontWeight: '600',
  },
  select: {
    width: '100%',
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #444',
    fontSize: '1rem',
    backgroundColor: '#1c1c1c',
    color: '#ffffff',
  },
};

export default Home;
