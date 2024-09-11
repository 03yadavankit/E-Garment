import axios from 'axios';

// Update to your deployed backend URL
export const API_BASE_URL = 'https://e-garment.onrender.com';

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Retrieve the JWT token from local storage (if available)
const token = localStorage.getItem('jwt');

// Set the Authorization header for all requests if the token exists
if (token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

// Ensure POST requests use the 'application/json' content type
api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;
