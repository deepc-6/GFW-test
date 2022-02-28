import axios from 'axios';

import authHeader from './auth-header';

const API_URL = 'http://localhost:3000';

export const getAllUsers = () => axios.get(API_URL);

export const getUserProfile = () =>
  axios.post(`${API_URL}/me`, {}, { headers: authHeader() });
