import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:3000/';

class UserService {
  getAllUsers() {
    return axios.get(API_URL);
  }

  getUserProfile() {
    return axios.post(API_URL + 'me', {}, { headers: authHeader() });
  }
}

export default new UserService();