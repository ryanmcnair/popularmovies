const getMovies = () => new Promise((resolve, reject) => {
  fetch('https://api.themoviedb.org/3/movie/popular?api_key=b91d0826fc54c8a50a0a64295c6d28e6', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export default getMovies;
