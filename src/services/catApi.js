const URL = 'https://api.thecatapi.com/v1/breeds';

export const getCats = () => {
  return fetch(`${URL}`)
    .then(res => res.json());
};

export const getCat = (id) => {
  return fetch(`${URL}/${id}`)
    .then(res => res.json());
};
