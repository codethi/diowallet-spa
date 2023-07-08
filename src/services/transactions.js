import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "http://localhost:5000";

export function findAllTransaction() {
  const response = axios.get(`${BASE_URL}/transactions`, {
    headers: { Authorization: `Bearer ${Cookies.get("token")}` },
  });

  return response;
}
