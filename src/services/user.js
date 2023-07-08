import axios from "axios";

const BASE_URL = "http://localhost:5000";

export function signup(data) {
  delete data.confirmPassword;
  const response = axios.post(`${BASE_URL}/signup`, data);
  return response;
}

