/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import '../utils/client';
import { useAuth } from '../utils/context/authContext';
import getMovies from '../utils/data/movies';
import { getFavorites, addFavorite, updateFavorite } from '../utils/data/favorites';
import MovieCard from '../components/Card';

function Home() {
  const { user } = useAuth();
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState(undefined);

  const getAllMovies = () => {
    getMovies()
      .then((data) => {
        setMovies(data.results);
      })
      .catch((err) => {
        setError(err);
      });
  };

  const getAllFavorites = () => {
    getFavorites(user.uid)
      .then((data) => {
        setFavorites(data);
      })
      .catch((err) => {
        setError(err);
      });
    console.warn('Error', error);
  };

  useEffect(() => {
    getAllMovies();
    getAllFavorites();
  }, []);

  const handleSubmit = (e, movieTitle, movieOverview) => {
    e.preventDefault();
    const payload = {
      title: movieTitle,
      overview: movieOverview,
      uid: user.uid,
    };
    addFavorite(payload).then(({ name }) => {
      const patchPayload = { firebaseKey: name, isFavorite: true };
      updateFavorite(patchPayload);
    });

    console.warn('Clicked!!!');
  };

  console.warn('favorites', favorites);

  return (
    <div>
      <h1>Hello {user.displayName}! </h1>
      <div
        style={{
          padding: '30px',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <h1>Popular Movies</h1>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {movies.map((movie) => (
          <div key={movie.id}>
            <MovieCard movieObj={{ title: movie.title, overview: movie.overview, isFavorite: false }} handleSubmit={(e) => handleSubmit(e, movie.title, movie.overview)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
