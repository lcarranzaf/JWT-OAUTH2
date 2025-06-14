import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/auth';

export const register = async (datos) => {
  const response = await axios.post(`${API_URL}/register`, datos);
  return response.data;
};

export const login = async (datos) => {
  const response = await axios.post(`${API_URL}/login`, datos);
  return response.data;
};

export const getProfile = async (token) => {
  const response = await axios.get(`${API_URL}/me`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};
