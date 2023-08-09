import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api' // Substitua pela URL da sua API
});

export default instance;
