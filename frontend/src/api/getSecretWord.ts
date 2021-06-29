import axios from 'axios';

export const getSecretWord = () => (
  axios.get(`http://localhost:3030`).then(res => res.data)
);
