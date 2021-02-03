export const getCharacters = () => {
  return fetch('https://api.thecatapi.com/v1/breeds')
    .then(res => res.json());
};

export const getImages = () => {
  return fetch('https://api.thecatapi.com/v1/images/search')
    .then(res => res.json());
};
