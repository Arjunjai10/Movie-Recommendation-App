import axios from 'axios';

const API_URL = 'https://movie-recommendation-app-6y9u.onrender.com/api/auth';  

export const signUp = async (userData) => {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
};

export const login = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/login`, credentials);
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
        }
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

export default { signUp, login }; 
