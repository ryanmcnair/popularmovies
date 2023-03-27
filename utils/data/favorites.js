const endpoint = 'https://nextjs-e967a-default-rtdb.firebaseio.com';

const getFavorites = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/data.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const addFavorite = (favData) => new Promise((resolve, reject) => {
  const payload = {
    uid: favData.uid,
    title: favData.title,
    overview: favData.overview,
  };
  fetch(`${endpoint}/data.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateFavorite = (patchPayload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/data/${patchPayload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(patchPayload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteFavorite = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/data/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getFavorites, addFavorite, updateFavorite, deleteFavorite,
};
