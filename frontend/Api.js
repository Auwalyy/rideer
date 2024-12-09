import axios from 'axios'
const baseURL = "http://192.168.43.32:8081"; // Replace with your machine's local IP

export const signup = async (userData) => {
    return await axios.post(`${baseURL}/api/auth/signup`, userData);
};

export const login = async (credentials) => {
    return await axios.post(`${baseURL}/api/auth/login`, credentials);
};
