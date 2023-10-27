import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "http://localhost:5000";

export function findAllTransaction() {
  const response = axios.get(`${BASE_URL}/transactions`, {
    headers: { Authorization: `Bearer ${Cookies.get("token")}` },
  });

  return response;
}

export function createNewTransaction(body) {
  const response = axios.post(`${BASE_URL}/transactions`, body, {
    headers: { Authorization: `Bearer ${Cookies.get("token")}` },
  });

  return response;
}
