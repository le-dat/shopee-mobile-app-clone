import axios from "axios";
import { API_URL } from "../constants";

const httpRequest = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default httpRequest;
