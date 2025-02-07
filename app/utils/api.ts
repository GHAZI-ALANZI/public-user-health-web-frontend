import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

export const register = async (name: string, email: string, password: string) => {
  return await axios.post(`${API_URL}/register`, {
    name,
    email,
    password,
    password_confirmation: password,
  });
};

export const login = async (email: string, password: string) => {
  return await axios.post(`${API_URL}/login`, { email, password });
};

export const getUserProfile = async (token: string) => {
  return await axios.get(`${API_URL}/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
export const updateUserProfile = async (formData: { name: string; email: string }) => {
    const token = localStorage.getItem("token");
    return await axios.put(`${API_URL}/update-profile`, formData, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };
  export const logout = () => {
    localStorage.removeItem("token");
  };
  

