import axios from 'axios';

const API_URL = 'https://movie-recommendation-app-lf9q.onrender.com/api/auth';

export const signUp = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    console.error("Signup Error:", error.response?.data || error.message);
    throw error.response ? error.response.data : error;
  }
};

export const login = async (credentials) => {
  try {
    console.log("Sending login request:", credentials); 
    const response = await axios.post(`${API_URL}/login`, credentials);
    
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
    }
    
    return response.data;
  } catch (error) {
    console.error("Login Error:", error.response?.data || error.message);
    throw error.response ? error.response.data : error;
  }
};

export default { signUp, login };
