import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const login = (username: string, password: string) =>
  axios
    .post(`${API_URL}/login`, {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    });

export const logout = () => {
  localStorage.removeItem('user');
};

export const createUser = (username: string, password: string) =>
  axios.post(API_URL, {
    username,
    password,
  });

export const getCurrentUser = () => {
  const userStr = localStorage.getItem('user');

  if (userStr) {
    return JSON.parse(userStr);
  }
  return null;
};
