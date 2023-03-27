import React, { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import { getFavorites, deleteFavorite } from '../utils/data/favorites';
import MovieCard from '../components/Card';

function Home() {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState(undefined);

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
    getAllFavorites();
  }, []);

  const handleSubmit = (e, firebaseKey) => {
    e.preventDefault();
    deleteFavorite(firebaseKey).then(() => {
      getAllFavorites();
    });
  };

  console.warn('favorites', favorites);

  return (
    <div>
      <div
        style={{
          padding: '30px',
          maxWidth: '500px',
          margin: '0 auto',
        }}
      >
        <h3>{user.displayName}&lsquo;s Favorite Movies</h3>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {favorites.map((favorite) => (
          <div key={favorite.firebaseKey}>
            <MovieCard movieObj={{ title: favorite.title, overview: favorite.overview }} handleSubmit={(e) => handleSubmit(e, favorite.firebaseKey)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
