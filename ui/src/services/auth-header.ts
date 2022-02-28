import { AxiosRequestHeaders } from 'axios';

const authHeader = (): AxiosRequestHeaders => {
  const userStr = localStorage.getItem('user');
  let user = null;

  if (userStr) {
    user = JSON.parse(userStr);
  }

  if (user && user.accessToken) {
    return { Authorization: `Bearer ${user.accessToken}` };
  }
  return {};
};

export default authHeader;
